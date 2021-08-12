import { useState, useEffect } from 'react';

/**
 * Handles the data and state of the given course
 *
 * @param {Object} currentCourse
 * @returns {Object}
 */
const useCourseData = (currentCourse) => {
  const defaultCourseState = {
    name: '',
    professor: '',
    semester: '',
    description: '',
  };
  if (!currentCourse) {
    currentCourse = defaultCourseState;
  }

  const [courseData, setCourseData] = useState({ ...currentCourse });

  /**
   * Sets the course data to the default course state
   */
  const clearCourseData = () => {
    setCourseData(defaultCourseState);
  };

  /**
   * Handles the change event of the input elements in the modal and updates
   * the new course state
   *
   * @param {Object} event
   * @param {string} field
   */
  const handleCourseDataChanged = (event, field) => {
    setCourseData((prevCourseData) => {
      const updatedCourseData = { ...prevCourseData };
      updatedCourseData[field] = event.target.value;
      return updatedCourseData;
    });
  };

  return { courseData, setCourseData, handleCourseDataChanged, clearCourseData };
};

export default useCourseData;
