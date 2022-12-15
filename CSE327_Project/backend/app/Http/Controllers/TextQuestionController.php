<?php

namespace App\Http\Controllers;

use App\Models\textQuestion;
use App\Http\Requests\StoretextQuestionRequest;
use App\Http\Requests\UpdatetextQuestionRequest;

class TextQuestionController extends Controller
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
     * @param  \App\Http\Requests\StoretextQuestionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoretextQuestionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\textQuestion  $textQuestion
     * @return \Illuminate\Http\Response
     */
    public function show(textQuestion $textQuestion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\textQuestion  $textQuestion
     * @return \Illuminate\Http\Response
     */
    public function edit(textQuestion $textQuestion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatetextQuestionRequest  $request
     * @param  \App\Models\textQuestion  $textQuestion
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatetextQuestionRequest $request, textQuestion $textQuestion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\textQuestion  $textQuestion
     * @return \Illuminate\Http\Response
     */
    public function destroy(textQuestion $textQuestion)
    {
        //
    }
}
