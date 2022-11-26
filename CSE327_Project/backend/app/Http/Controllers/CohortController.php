<?php

namespace App\Http\Controllers;

use App\Models\Cohort;
use App\Http\Requests\StoreCohortRequest;
use App\Http\Requests\UpdateCohortRequest;

class CohortController extends Controller
{
    public function store(StoreCohortRequest $cohort)
    {
        $result = Cohort::insert([
            'name' => $cohort->name,
            'description' => $cohort->description,
            'subCohortOf' => $cohort->subCohortId,
            'teacherId' => $cohort->teacherId
        ]);
        if($result==true){
            return "successfully stored";
        }
        else{
            return "failed stored";
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cohort  $cohort
     * @return \Illuminate\Http\Response
     */
    public function show($teacherId)
    {
        $result = Cohort::where('teacherId', '=',$teacherId)
        ->where('subCohortId', '=', 0)
        ->get();
        return response()->json([
                'status' => 200,
                'cohort' => $result,
        ]);
    }

    public function index($teacherId)
    {
        $result = Cohort::where('teacherId', '=',$teacherId)->get();
        return response()->json([
                'status' => 200,
                'cohort' => $result,
        ]);
    }
}
