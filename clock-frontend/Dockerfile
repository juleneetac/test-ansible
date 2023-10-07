# Use an official Node.js image as the base image
FROM node:latest as builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI and dependencies
RUN npm install -g @angular/cli@latest
RUN npm install

# Copy the entire Angular app to the working directory
COPY . .

# Build the Angular app for production
# RUN ng build --prod
RUN npm run build --prod

# Use a lightweight Nginx image as the final base image
FROM nginx:alpine

# Copy the built Angular app from the builder stage to Nginx
COPY --from=builder /usr/src/app/dist/clock /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]