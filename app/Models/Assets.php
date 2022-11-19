<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assets extends Model
{
    use HasFactory;

    public $fillable = [
        'name',
        'assets_type',
        'content',
    ];

    public $timestamps = false;
}
