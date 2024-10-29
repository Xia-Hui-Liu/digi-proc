# DigiProc Product Showcase

This project is a coding challenge for DigiProc, aimed at creating a responsive web application that displays product cards. The application consists of a Next.js frontend using TypeScript and a Node.js backend.

## Project Setup

### Technologies Used
- **Frontend**: 
  - **Next.js**: A React framework for server-side rendering and static site generation.
  - **TypeScript**: For type safety and improved code quality.
  - **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

- **Backend**: 
  - **Node.js**: JavaScript runtime for building server-side applications.
  - **Express.js**: Framework for building APIs easily.
  - **JSON File**: Used for storing product data.

### Folder Structure
- **Client**: Contains the Next.js application.
  - `/components`: Reusable components, including the product card.
  - `/context`: Contains `CartContext` for managing cart state.
  - `/pages`: Main entry point and routing for the application.
  - `/styles`: Global styles and Tailwind CSS configurations.
  - `/services`: Functions for fetching API data.
  - `/types`: Type definitions for product data.

- **Server**: Contains the Node.js backend.
  - `/data`: Holds the JSON file with product information.
  - `/routes`: API routes for fetching product data.
  - `server.ts`: Main entry point for the backend server.

### Installation and Running
1. Clone the repository.
   git clone https://github.com/Xia-Hui-Liu/digi-proc.git
   cd digi-proc
2. Install dependencies for both the client and server.
    Client: 
        cd client
        npm install
    Server:
        cd ../server
        npm install
3. Start the backend server, then the frontend application.
    npm start
    cd ../client
    npm run dev
4. Access the app at http://localhost:3000.

## Design Choices

- **Responsive Design**: The layout is built mobile-first, using Tailwind CSS for responsive utility classes to adapt to different screen sizes.
- **Dynamic Data**: Products are fetched from the backend API, allowing easy updates to the product data without modifying the frontend.
- **Component-Based Architecture**: The use of React components promotes reusability and separation of concerns, making the codebase easier to maintain and extend.

## Trade-offs

- **Data Storage**: Using a JSON file for data storage is suitable for this project scope but not ideal for larger applications or complex data. In a production environment, a database (like MongoDB or PostgreSQL) would be recommended.
- **Limited Functionality**: While the app meets the basic requirements, additional features like the rating stars and user authentication were not implemented to focus on core functionality. These could be added later for a more complete application.
- **Performance Considerations**: The app currently fetches all product data at once, which is manageable for small datasets but may need optimization (like pagination or lazy loading) for larger datasets.

## Conclusion

This project showcases a functional and responsive product showcase application with a clear structure and good coding practices. The choices made during development aimed for a balance between simplicity and maintainability, while the documented trade-offs highlight areas for future enhancement.

For any questions or further information, feel free to reach out!