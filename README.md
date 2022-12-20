Comandos para los scripts de angular deshabilitados
 Get-ExecutionPolicy -list para ver el listado
 PS C:\WINDOWS\system32> Set-ExecutionPolicy RemoteSigned -Force para forzar los comandos
 
 <br>
 
 <t> en la direccion node_modules/@angular/fire/compat/firestore/interfaces.d.ts
 
 
 export interface DocumentSnapshotExists<T> extends firebase.firestore.DocumentSnapshot<T> 
 
 <br>
 si da fallo el compat ve a tu app.module.ts y escribe esto
 
   providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],

import { FIREBASE_OPTIONS } from '@angular/fire/compat';

