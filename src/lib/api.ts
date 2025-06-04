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
    
    // Fallback to empty object instead of trying to import missing file
    console.warn(`${sectionName}.json not found in References directory. Using empty data object.`);
    return {};
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
    // Fallback to empty object instead of trying to import missing file
    console.warn('API.json not found in References directory. Using empty data object.');
    return {};
  }
}
