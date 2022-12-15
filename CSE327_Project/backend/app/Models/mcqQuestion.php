<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mcqQuestion extends Model
{
    use HasFactory;
    protected  $primaryKey = 'mcqQuestionId';
    protected $guarded = [];
}
