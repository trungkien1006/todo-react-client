function timeDifference(start, end) {
  const startTime = new Date(start).getTime(); // Chuyển về timestamp (ms)
  const endTime = new Date(end).getTime();
  
  return endTime - startTime;
}

export default timeDifference;