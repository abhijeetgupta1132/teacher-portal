<?php
namespace App\Controllers\Api;
use App\Controllers\BaseController;
use App\Models\AuthUserModel;
use App\Models\TeacherModel;

class TeacherController extends BaseController
{
    public function create()
    {
        $data = $this->request->getJSON(true);
        if (!$data) return $this->response->setJSON(['status' => false, 'message' => 'No data'])->setStatusCode(400);

        $db = \Config\Database::connect();
        $db->transStart();

        $userId = (new AuthUserModel())->insert([
            'email'      => $data['email'],
            'first_name' => $data['first_name'],
            'last_name'  => $data['last_name'],
            'password'   => password_hash($data['password'], PASSWORD_BCRYPT),
        ]);

        (new TeacherModel())->insert([
            'user_id'         => $userId,
            'university_name' => $data['university_name'],
            'gender'          => $data['gender'],
            'year_joined'     => $data['year_joined'],
            'subject'         => $data['subject'],
            'phone'           => $data['phone'],
        ]);

        $db->transComplete();

        if ($db->transStatus() === false) {
            return $this->response->setJSON(['status' => false, 'message' => 'Failed'])->setStatusCode(500);
        }
        return $this->response->setJSON(['status' => true, 'message' => 'Teacher created'])->setStatusCode(201);
    }

    public function index()
    {
        $db = \Config\Database::connect();
        $data = $db->table('teachers t')
            ->select('t.*, u.email, u.first_name, u.last_name')
            ->join('auth_user u', 'u.id = t.user_id')
            ->get()->getResultArray();
        return $this->response->setJSON(['status' => true, 'data' => $data]);
    }
}