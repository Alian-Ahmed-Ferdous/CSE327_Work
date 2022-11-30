<?php

namespace App\Http\Controllers;

use App\Models\Cohort;
use App\Models\taughtIn;
use Illuminate\Http\Request;

class taughtinController extends Controller
{
    public function index($cohortId)
    {
        $result = taughtIn::where('cohortId','=',$cohortId)->get();
        return $result;
    }

    public function add(Request $request, $studentId)
    {
        $result = taughtIn::insert([
            'studentId' => $studentId,
            'cohortId' => $request->cohortId
        ]);
        if($result==true){
            return "successfully stored";
        }
        else{
            return "failed stored";
        }
    }
}
