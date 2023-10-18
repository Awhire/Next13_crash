"use client"

import { useState, useEffect } from "react"
import LoadingPage from "./loading"
import Link from 'next/link'
import Courses from './components/Courses'
import CourseSearch from "./components/CourseSearch"

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourse = async() => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false)
    }

    fetchCourse()
  }, [])

  if(loading) {
    return <LoadingPage />
  }

  return (
    <>
      <h1>Welcome To Khiztech Media</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </>
  )
}

export default HomePage
