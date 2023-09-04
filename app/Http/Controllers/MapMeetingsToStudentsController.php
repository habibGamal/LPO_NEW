<?php

namespace App\Http\Controllers;

use App\Models\Meeting;
use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MapMeetingsToStudentsController extends Controller
{
    function editableStudentsTable()
    {
        return Inertia::render('StudentsMeetings/EditableStudentsTable', [
            'students' => Student::select(['id',  'firstName', 'secondName',  'show_meetings'])->get(),
        ]);
    }

    function updateStudentShowMeetings(Request $request)
    {
        $student = Student::find($request->id);
        $student->show_meetings = $request->show_meetings;
        $student->save();
        return redirect()->back();
    }

    function editStudentMeetings(Student $student)
    {
        return Inertia::render('StudentsMeetings/EditStudentMeetings', [
            'student' => $student,
            'meetings' => Meeting::all(),
        ]);
    }

    function updateStudentMeetings(Request $request)
    {
        $student = Student::find($request->id);
        $student->meetings = $request->meetings;
        $student->save();
        return redirect()->back();
    }

    function showStudentsTable()
    {
        return Inertia::render('StudentsMeetings/StudentsTable', [
            'students' => Student::select(['id', 'avatar_path', 'firstName', 'secondName', 'arabic_first_name', 'arabic_second_name',  'show_meetings'])
                ->where('show_meetings', 1)->get(),
        ]);
    }

    function showStudentMeetings(Student $student)
    {
        return Inertia::render('StudentsMeetings/StudentMeetings', [
            'student' => $student,
            'meetings' => Meeting::orderBy('date')->get(),
        ]);
    }

    function showMeeting(Request $request)
    {
        return Inertia::render('StudentsMeetings/ShowMeeting', [
            'embededLink' => $request->embededLink,
        ]);
    }
}
