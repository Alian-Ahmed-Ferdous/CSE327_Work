<?php

namespace App\Http\Controllers;

use App\Models\mcqQuestion;
use App\Http\Requests\StoremcqQuestionRequest;
use App\Http\Requests\UpdatemcqQuestionRequest;

class McqQuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoremcqQuestionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoremcqQuestionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\mcqQuestion  $mcqQuestion
     * @return \Illuminate\Http\Response
     */
    public function show(mcqQuestion $mcqQuestion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\mcqQuestion  $mcqQuestion
     * @return \Illuminate\Http\Response
     */
    public function edit(mcqQuestion $mcqQuestion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatemcqQuestionRequest  $request
     * @param  \App\Models\mcqQuestion  $mcqQuestion
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatemcqQuestionRequest $request, mcqQuestion $mcqQuestion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\mcqQuestion  $mcqQuestion
     * @return \Illuminate\Http\Response
     */
    public function destroy(mcqQuestion $mcqQuestion)
    {
        //
    }
}
