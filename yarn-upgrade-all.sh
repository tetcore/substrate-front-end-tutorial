#!/bin/bash
for i in $(echo ./part-*)
do
   echo -e "\nInstall and upgrade $i\n"
   yarn
   yarn upgrade
done
