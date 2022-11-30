<?php

namespace App\Http\Controllers;

use App\Models\Cohort;
use Illuminate\Http\Request;
use App\Http\Requests\UpdateCohortRequest;

class CohortController extends Controller
{
    public function store(Request $request)
    {
        $result = Cohort::insert([
            'name' => $request->name,
            'description' => $request->description,
            'subCohortId' => 0,
            'teacherId' => $request->teacherId
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
    public function nonSubCohort($teacherId)
    {
        $result = Cohort::where('teacherId', '=',$teacherId)
        ->where('subCohortId', '=', 0)
        ->get();
        return response()->json([
                'status' => 200,
                'cohort' => $result,
        ]);
    }

    public function ByTeacherId($teacherId)
    {
        $result = Cohort::where('teacherId', '=',$teacherId)->get();
        return $result;
    }

    public function showCohortById($cohortId)
    {
        $result = Cohort::where('cohortId', '=',$cohortId)->get();
        return response()->json([
                'status' => 200,
                'cohort' => $result,
        ]);
    }

    public function update(Request $request, $cohortId)
{
    try{
        $result = Cohort::find($cohortId);

        $result->subCohortId = $request->cohortId;
        $result->save();
        return "success";
    }
    catch(ModelNotFoundException $err){
        return "error";
    }
}

public function latestCohortId()
{
    $result = Cohort::all()->sortByDesc('cohortId')->first();
    return $result;
}
}
