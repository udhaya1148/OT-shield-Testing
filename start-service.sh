#!/bin/bash

# Set executable permissions for the scripts
sudo chmod +x /usr/bin/Chiefnet-OT-Shield/Scripts/arp-script.sh
sudo chmod +x /usr/bin/Chiefnet-OT-Shield/Scripts/network-configuration-service.sh
sudo chmod +x /usr/bin/Chiefnet-OT-Shield/Scripts/start-vite.sh
sudo chmod +x /usr/bin/Chiefnet-OT-Shield/Scripts/ui-script.sh
sudo chmod +x /usr/bin/Chiefnet-OT-Shield/Scripts/routes-script.sh

echo "Permissions updated for all scripts."

cd /usr/bin/Chiefnet-OT-Shield/Scripts/

# Run each script in sequence
echo "Running arp_script.sh..."
sudo ./arp-script.sh

echo "Running network-configuration-service.sh..."
sudo ./network-configuration-service.sh

echo "Running routes-script.sh..."
sudo ./routes-script.sh

echo "Running ui-script.sh..."
sudo ./ui-script.sh

echo "Running default-config-script.sh..."
sudo ./default-config-script.sh

echo "All scripts executed successfully."

