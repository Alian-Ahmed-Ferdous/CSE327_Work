<?php

namespace App\Http\Controllers;

use App\Models\Cohort;
use App\Models\taughtIn;
use Illuminate\Http\Request;

class taughtinController extends Controller
{
    public function index($cohortId){
        $result = taughtIn::where('cohortId','=',$cohortId)->get();
        return response()->json([
            'status' => 200,
            'taughtIn' => $result,
    ]);
    }
}
