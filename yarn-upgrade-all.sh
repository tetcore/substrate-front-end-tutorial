#!/bin/bash
for i in $(echo ./part-*)
do
   echo "\nUpgrading $i\n"
   yarn
   yarn upgrade
done
