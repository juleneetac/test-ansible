# Ansible-PROJECT
Asuming that the following files are in the root directory of the ansible-project:
- rsa.pub            (public key)
- rsa.txt            (private key)
- debian10-ssh.img   (image of the VM)

# DOCKER
## build the Docker image:
docker build -t ansible-container .

## run the Docker build

docker run -d ansible-container



## use libvirt:
### local
sudo apt-get install qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils
sudo adduser $USER libvirt
sudo adduser $USER kvm
### for docker
sudo apt update
apt install ansible
sudo apt install libvirt-dev gcc python3-dev
pip install --upgrade pip
pip install libvirt-python

Changing /etc/libvirt/qemu.conf to make things work.
Uncomment user/group to work as root.


### show ip of the VM:
virsh domifaddr <name of the VM> 
### Add the private key in the local:
ssh-add rsa.txt     
### ssh to VM with the public key
ssh ubuntu@<vm_ip_address> -i id_rsa

 
