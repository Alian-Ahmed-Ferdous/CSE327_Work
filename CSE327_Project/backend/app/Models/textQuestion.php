<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class textQuestion extends Model
{
    use HasFactory;
    protected  $primaryKey = 'textQuestionId';
    protected $guarded = [];
}
