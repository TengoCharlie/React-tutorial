#!/bin/bash

addFileDefault="."
addFileDefaultTemp=""
commitMessage="My First Commit"
commitMessageTemp=""
branchName="main"

echo -e "Please enter file name to make git: ($addFileDefault)"
read addFileDefaultTemp
echo -e "Please Enter Commit message: ($commitMessage)"
read commitMessageTemp
echo -e "Please enter Branch name: ($branchName)"
read branchName

if [ "$addFileDefaultTemp" != "" ]; then
    echo -e "File added is: $addFileDefaultTemp"
    addFileDefault=$addFileDefaultTemp
fi

if [ "$commitMessageTemp" != "" ]; then
    echo -e "Your Commit message is: $addFileDefaultTemp"
    commitMessage=$commitMessageTemp
fi

echo -e $branchName
git add $addFileDefault
git commit -m "$commitMessage"