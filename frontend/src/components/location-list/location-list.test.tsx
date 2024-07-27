import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LocationList, LocationListProps } from '../location-list';
import { mockLocations } from '../../utils/mock-locations.ts';

// Mock the useNavigate function from react-router-dom
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const mockOnSelectLocation = jest.fn();

const renderComponent = (props: Partial<LocationListProps> = {}) => {
  return render(
    <Router>
      <LocationList locations={mockLocations} onSelectLocation={mockOnSelectLocation} {...props} />
    </Router>,
  );
};

describe('LocationList Component', () => {
  test('renders location list with correct items', () => {
    renderComponent();

    const locationItems = screen.getAllByRole('listitem');
    expect(locationItems).toHaveLength(mockLocations.length);
    expect(screen.getByText('Location 1')).toBeInTheDocument();
    expect(screen.getByText('123 Main St')).toBeInTheDocument();
    expect(screen.getByText('Location 2')).toBeInTheDocument();
    expect(screen.getByText('456 Elm St')).toBeInTheDocument();
    expect(screen.getByText('Location 3')).toBeInTheDocument();
    expect(screen.getByText('No address available')).toBeInTheDocument();
  });

  test('calls onSelectLocation when a location is clicked', () => {
    renderComponent();

    const locationItems = screen.getAllByRole('listitem');
    fireEvent.click(locationItems[0]);
    expect(mockOnSelectLocation).toHaveBeenCalledWith(mockLocations[0]);

    fireEvent.click(locationItems[1]);
    expect(mockOnSelectLocation).toHaveBeenCalledWith(mockLocations[1]);
  });

  test('navigates to home when back button is clicked', () => {
    renderComponent();

    const backButton = screen.getByText('Back');
    fireEvent.click(backButton);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
