# Use the latest Node.js Alpine image
FROM node:alpine

WORKDIR /app

# Copy the root package.json and package-lock.json
COPY package*.json ./

# Install root dependencies (including concurrently)
RUN npm install

# Copy the frontend and backend folders into the container
COPY frontend ./frontend
COPY backend ./backend

# Install frontend and backend dependencies
RUN npm install --prefix frontend
RUN npm install --prefix backend

# Expose the ports for frontend and backend
EXPOSE 3000 3001

# Start the application
CMD ["npm", "start"]