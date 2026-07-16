import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserData {
// Flag to easily toggle the implementation layer later
  private useApi = false; 

  registerUser(userData: any) {
    if (this.useApi) {
      return this.registerViaApi(userData);
    } else {
      return this.registerViaLocalFile(userData);
    }
  }

  // --- Phase 1: Local File / Local Storage Simulation ---
  private registerViaLocalFile(userData: any) {
    console.log('Saving user data locally...');
    
    // 1. Get existing users stored locally
    const currentUsers = JSON.parse(localStorage.getItem('mock_users') || '[]');
    currentUsers.push(userData);
    
    // 2. Save back to local storage
    localStorage.setItem('mock_users', JSON.stringify(currentUsers));

    // Optional: Code to actually download it as a real .txt/.json file if needed
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentUsers));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "users_backup.json");
    // downloadAnchor.click(); // Uncomment to force browser to save file locally
    
    return { success: true, message: 'Saved to local file' };
  }

  // --- Phase 2: Future API Integration ---
  private registerViaApi(userData: any) {
    console.log('Sending data to backend server API endpoint...');
    // This is where your future HttpClient code will go:
    // return this.http.post('https://api.myapp.com/register', userData);
    return { success: true, message: 'Saved via API' };
  }
}
