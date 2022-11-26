<?php

namespace App\Http\Controllers;

use App\Models\Cohort;
use App\Models\taughtIn;
use Illuminate\Http\Request;

class taughtinController extends Controller
{
    public function show($teacherId){

        $id = Cohort::select('cohortId')->where('teacherId', '=',$teacherId)->get();
        $jsonobj =
        return $id;
        $result = taughtIn::where('cohortId','=',$id);
        return response()->json([
            'status' => 200,
            'taughtIn' => $result,
    ]);
    }
}
