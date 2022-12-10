<?php

namespace App\Services;

class ExamService {
    private $allowedTime = 20 * 60;
    public function createSession($student){
        $student->is_in_exam = true;
        $student->start_time = time();
        $student->save();
    }
    public function isSessionValid($student){
        return intval($student->start_time) + $this->allowedTime > time() ;
    }
    public function endSession($student){
        $student->can_exam = false;
        $student->is_in_exam = false;
        $student->score = 0;
        $student->save();
    }
}
