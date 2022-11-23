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
            return 1;
        }
        else{
            return 0;
        }
    }

    public function show(Request $request){
        
        $result = Teacher::all();
        return $result;
    }
}