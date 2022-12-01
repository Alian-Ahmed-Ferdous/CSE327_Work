<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Student;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class StudentController extends Controller
{
    public function store(Request $request){
        $base64_image = $request->input('studentImg'); // your base64 encoded     
        @list($type, $file_data) = explode(';', $base64_image);
        @list(, $file_data) = explode(',', $file_data); 
        $time = Carbon::now();
        $imageName = $request->firstName.$time->toDateString().'.'.'png';   
        Storage::disk('local')->put($imageName, base64_decode($file_data));
        $url = Storage::url($imageName);
        // return $file_data;
        $result = Student::insert([
            'firstName' => $request->firstName,
            'lastName' => $request->lastName,
            'email' => $request->email,
            'studentImg' => "C:/xampp/htdocs/CSE327_Project/backend/storage/app/".$imageName,
        ]);

        if($result==true){
            return "successfully stored";
        }
        else{
            return "failed stored";
        }
    }

    public function show(Request $request){
        
        $result = Student::all();
        return response()->json([
            'status' => 200,
            'student' => $result,
    ]);
    }

    public function new(Request $request){
        
        $result = Student::all()->sortByDesc('studentId')->first();
        return $result;
    }
}
