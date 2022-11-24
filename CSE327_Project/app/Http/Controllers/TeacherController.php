<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\Request;

class TeacherController extends Controller
{
    public function store(Request $request){
        
        $result = Teacher::insert([
            'firstName' => $request->firstName,
            'lastName' => $request->lastName,
            'email' => $request->email,
        ]);
        if($result==true){
            return "successfully stored";
        }
        else{
            return "failed stored";
        }
    }

    public function show(Request $request){
        
        $result = Teacher::all();
        return $result;
    }
}