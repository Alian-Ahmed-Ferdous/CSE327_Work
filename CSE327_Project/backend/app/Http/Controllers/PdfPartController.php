<?php

namespace App\Http\Controllers;

use App\Models\pdfPart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StorepdfPartRequest;
use App\Http\Requests\UpdatepdfPartRequest;

class PdfPartController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'assignmentId' => 'required',
            'part' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors'=>$validator->errors()],422);
        }

        $assignment = pdfPart::create([
            'assignmentId' => $request->assignmentId,
            'part' => $request->part,
        ]);
        return response()->json([
            'status' => 200,
        ]);
    }

    public function show($assignmentId){
        
        $result = pdfPart::select('part','partId')->where("assignmentId", "=", $assignmentId)->get();
        return response()->json([
            'status' => 200,
            'pdfPart' => $result
        ]);
    }
}
