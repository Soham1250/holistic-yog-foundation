/**
 * API service for fetching section data
 * This simulates API calls to a backend service
 */

// Type for section names to ensure type safety
export type SectionName = 
  | 'HeadingSection'
  | 'ImagesSection'
  | 'AboutUsSection'
  | 'InstructorsSection'
  | 'BannerSection'
  | 'MembershipSection'
  | 'ServicesSection'
  | 'WhyUsSection'
  | 'CoursesSection';

/**
 * Fetch data for a specific section
 * @param sectionName The name of the section to fetch data for
 * @returns The section data or null if an error occurs
 */
export async function fetchSectionData(sectionName: SectionName) {
  try {
    // In a real implementation, this would be a fetch call to your backend API
    // For now, we're simulating by importing the JSON directly
    const response = await fetch(`/api/sections/${sectionName}`);
    
    if (!response.ok) {
      throw new Error(`Error fetching ${sectionName} data: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${sectionName} data:`, error);
    
    // Fallback to local JSON files during development
    try {
      // Dynamic import of the JSON file
      const data = await import(`../References/${sectionName}.json`);
      return data.default || data;
    } catch (fallbackError) {
      console.error(`Fallback error for ${sectionName}:`, fallbackError);
      return null;
    }
  }
}

/**
 * Fetch data for all sections at once
 * @returns All sections data or null if an error occurs
 */
export async function fetchAllSectionsData() {
  try {
    // In a real implementation, this would be a fetch call to your backend API
    const response = await fetch('/api/sections');
    
    if (!response.ok) {
      throw new Error(`Error fetching all sections data: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching all sections data:', error);
    // Fallback to local JSON file during development
    try {
      const data = await import('../References/API.json');
      return data.default || data;
    } catch (fallbackError) {
      console.error('Fallback error for all sections:', fallbackError);
      return null;
    }
  }
}
