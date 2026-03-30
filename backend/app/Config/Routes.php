<?php

use CodeIgniter\Router\RouteCollection;

/** @var RouteCollection $routes */
$routes->setAutoRoute(true);

$routes->get('/', 'Home::index');

$routes->post('api/auth/register', 'Api\AuthController::register');
$routes->post('api/auth/login',    'Api\AuthController::login');

$routes->group('api', ['filter' => 'authfilter'], function($routes) {
    $routes->get('auth/users',   'Api\AuthController::users');
    $routes->post('teachers',    'Api\TeacherController::create');
    $routes->get('teachers',     'Api\TeacherController::index');
});