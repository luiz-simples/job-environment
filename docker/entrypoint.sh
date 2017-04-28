#!/bin/bash

if [ ! -d /job/app/node_modules ]
then
  OLD_PATH=$PWD

  cd /job/app
  npm install

  cd $OLD_PATH
fi

if [ ! -d /job/app/client/node_modules ]
then
  OLD_PATH=$PWD

  cd /job/app/client
  npm install

  cd $OLD_PATH
fi

echo ""
echo "-------------------------------------"
echo "Máquina virtual pronta para trabalhar"
echo "-------------------------------------"
echo ""

exec "$@"
