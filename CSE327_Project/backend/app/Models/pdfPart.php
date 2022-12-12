<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class pdfPart extends Model
{
    use HasFactory;
    protected  $primaryKey = 'partId';
    protected $guarded = [];
}
