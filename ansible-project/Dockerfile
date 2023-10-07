# FROM python:3

# # Install required dependencies
# RUN pip install ansible

# # Set the working directory inside the container
# WORKDIR /ansible

# # Copy the playbook to the container's working directory
# COPY playbook/test.yaml .
# COPY inventories/staging/hosts .

# # Run the playbook
# CMD ["ansible-playbook", "-i", "hosts", "test.yaml"]
#----------------------------------------------------------
# Use an official Ansible Docker image as the base image
FROM python:3

# Install required dependencies
RUN pip install ansible

# Install required packages for libvirt support
RUN apt-get update && \
    apt-get install -y libvirt-dev gcc python3-dev && \
    pip install libvirt-python

RUN pip3 install ansible pywinrm xmltodict libvirt-python

# Set the working directory inside the container
WORKDIR /ansible

# Copy the playbook to the container's working directory
COPY playbook/create-vm.yaml .
COPY inventories/staging/hosts .
COPY vm.xml .


# Run the playbook when the container starts
CMD ["ansible-playbook", "-i", "hosts", "create-vm.yaml"]