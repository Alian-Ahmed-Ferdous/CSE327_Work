<?php

namespace App\Http\Controllers;

use App\Models\Cohort;
use App\Http\Requests\StoreCohortRequest;
use App\Http\Requests\UpdateCohortRequest;

class CohortController extends Controller
{
    public function store(StoreCohortRequest $request)
    {
        $result = Cohort::insert([
            'name' => $request->name,
            'description' => $request->description,
            'subCohortOf' => $request->subCohortId,
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
    public function show(Cohort $cohort)
    {
        $cohort = Cohort::all();
        return $cohort;
    }

    public function index(Cohort $cohort)
    {
        $id = $cohort->input('teacherId');
        $cohort = Cohort::where('teacherId',$id )->get();
        return $cohort;
    }
}
