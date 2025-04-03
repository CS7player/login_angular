# Step 1: Build the Angular project
FROM node:18 AS build

# Use Node.js version 18 or higher
# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy the Angular project files into the container
COPY . .

# Build the Angular project in production mode
RUN ng build 

# Step 2: Serve the Angular app using Apache
FROM httpd:alpine

# Copy the built files from the previous build stage into the Apache container
COPY --from=build /app/dist/login-page /usr/local/apache2/htdocs/

# Expose port 80 (default for HTTP)
EXPOSE 80

# The default command for the Apache container is already set to run Apache in the foreground
