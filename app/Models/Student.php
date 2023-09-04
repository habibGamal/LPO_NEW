<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    public $fillable = [
        'avatar_path',
        'firstName',
        'secondName',
        'phone',
        'birthday',
        'gender',
        'country',
        'firstLanguage',
        'secondLanguage',
        'level',
        'can_exam',
        'is_in_exam',
        'score',
        'start_time',
        'address',
        'zip_code',
        'city',
        'arabic_first_name',
        'arabic_second_name',
    ];

    public $timestamps = false;

    public function user(){
        return $this->hasOne(User::class);
    }
}
