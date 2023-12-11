function skillsMember() {
    // Sample implementation, you can modify this based on your requirements
    const skills = ["JavaScript", "HTML", "CSS", "React", "Node.js"];
    const randomSkillIndex = Math.floor(Math.random() * skills.length);
    const randomSkill = skills[randomSkillIndex];
  
    console.log(`This member's random skill is: ${randomSkill}`);
  }
  
  // Call the function
  skillsMember();
  