<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    public $fillable = [
        'firstName',
        'secondName',
        'phone',
        'birthday',
        'gender',
        'country',
        'firstLanguage',
        'secondLanguage',
        'level',
    ];

    public $timestamps = false;

    public function user(){
        return $this->hasOne(User::class);
    }
}
