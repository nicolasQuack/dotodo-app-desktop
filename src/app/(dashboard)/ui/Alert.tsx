import React, { FC } from "react";
import { Alert } from 'flowbite-react';
import { FaSignature } from "react-icons/fa";

export const AlertExample: FC = function () {
    return (
        <Alert
      color="info"
      rounded={false}
      withBorderAccent
      onDismiss={console.log}
      additionalContent={
        <React.Fragment>
          <div className="mb-4 mt-2 text-sm text-slate-700 dark:text-slate-700">
          Se assinar essa mensagem eu serei notificado.
          </div>
          <div className="flex">
            <button
              type="button"
              className="rounded-lg border bg-blue-500 px-3 flex shadow-md py-1.5 text-center text-xs font-medium text-white hover:bg-blue-600 hover:text-white focus:ring-4 focus:ring-green-300 dark:bg-white dark:hover:bg-blue-600 dark:text-blue-500 dark:hover:text-white"
            >
              <FaSignature className="-ml-0.5 mr-2 h-4 w-4"/>
              Assinar
            </button>
          </div>
        </React.Fragment>
      }
    >
      <h3 className="text-lg font-medium text-gray-800 dark:text-gray-800">
        Aprovar
      </h3>
    </Alert>
        )
}