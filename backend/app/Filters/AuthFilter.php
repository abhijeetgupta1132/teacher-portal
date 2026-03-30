<?php

namespace App\Filters;

use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class AuthFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

        if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            http_response_code(200);
            exit();
        }

        $authHeader = $request->getHeaderLine('Authorization');

        if (!$authHeader || strpos($authHeader, 'Bearer ') !== 0) {
            return response()->setJSON([
                'status'  => false,
                'message' => 'No token provided'
            ])->setStatusCode(401);
        }

        $token = substr($authHeader, 7);

        try {
        JWT::decode($token, new Key(getenv('JWT_SECRET') ?: 'this_is_a_very_long_secret_key_for_jwt_123456789', 'HS256'));
        } catch (\Exception $e) {
            return response()->setJSON([
                'status'  => false,
                'message' => 'Invalid or expired token'
            ])->setStatusCode(401);
        }
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null) {}
}