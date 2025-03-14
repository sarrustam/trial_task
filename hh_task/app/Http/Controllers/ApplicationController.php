<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Application;

class ApplicationController extends Controller
{

    protected $application;

    public function __construct(){
        $this->application = new Application();
    }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->application->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->application->create($request->all());

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return $application = $this->application->find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $application = $this->application->find($id);
        return $application->delete();
    }
    
}
