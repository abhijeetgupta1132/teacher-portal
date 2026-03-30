<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\AuthUserModel;
use Firebase\JWT\JWT;

class AuthController extends BaseController
{
    public function register()
    {
        $data = $this->request->getJSON(true);
        if (!$data || empty($data['email']) || empty($data['password'])) {
            return $this->response->setJSON(['status' => false, 'message' => 'Email and password required'])->setStatusCode(400);
        }
        $model = new AuthUserModel();
        if ($model->where('email', $data['email'])->first()) {
            return $this->response->setJSON(['status' => false, 'message' => 'Email already exists'])->setStatusCode(409);
        }
        $userId = $model->insert([
            'email'      => $data['email'],
            'first_name' => $data['first_name'] ?? '',
            'last_name'  => $data['last_name'] ?? '',
            'password'   => password_hash($data['password'], PASSWORD_BCRYPT),
        ]);
        return $this->response->setJSON(['status' => true, 'message' => 'Registered successfully', 'user_id' => $userId])->setStatusCode(201);
    }

    public function login()
    {
        $data = $this->request->getJSON(true);
        if (!$data || empty($data['email']) || empty($data['password'])) {
            return $this->response->setJSON(['status' => false, 'message' => 'Email and password required'])->setStatusCode(400);
        }
        $model = new AuthUserModel();
        $user  = $model->where('email', $data['email'])->first();
        if (!$user || !password_verify($data['password'], $user['password'])) {
            return $this->response->setJSON(['status' => false, 'message' => 'Invalid credentials'])->setStatusCode(401);
        }
        $token = JWT::encode([
            'iat'     => time(),
            'exp'     => time() + 86400,
            'user_id' => $user['id'],
            'email'   => $user['email']
       ], getenv('JWT_SECRET') ?: 'this_is_a_very_long_secret_key_for_jwt_123456789', 'HS256');
        return $this->response->setJSON(['status' => true, 'token' => $token, 'user' => [
            'id'         => $user['id'],
            'email'      => $user['email'],
            'first_name' => $user['first_name'],
            'last_name'  => $user['last_name'],
        ]]);
    }

    public function users()
    {
        $model = new AuthUserModel();
        return $this->response->setJSON(['status' => true, 'data' => $model->select('id,email,first_name,last_name,created_at')->findAll()]);
    }
}