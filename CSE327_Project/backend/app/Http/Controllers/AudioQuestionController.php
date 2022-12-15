<?php

namespace App\Http\Controllers;

use App\Models\audioQuestion;
use App\Http\Requests\StoreaudioQuestionRequest;
use App\Http\Requests\UpdateaudioQuestionRequest;

class AudioQuestionController extends Controller
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
     * @param  \App\Http\Requests\StoreaudioQuestionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreaudioQuestionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\audioQuestion  $audioQuestion
     * @return \Illuminate\Http\Response
     */
    public function show(audioQuestion $audioQuestion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\audioQuestion  $audioQuestion
     * @return \Illuminate\Http\Response
     */
    public function edit(audioQuestion $audioQuestion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateaudioQuestionRequest  $request
     * @param  \App\Models\audioQuestion  $audioQuestion
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateaudioQuestionRequest $request, audioQuestion $audioQuestion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\audioQuestion  $audioQuestion
     * @return \Illuminate\Http\Response
     */
    public function destroy(audioQuestion $audioQuestion)
    {
        //
    }
}
