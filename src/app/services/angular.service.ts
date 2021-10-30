import { Injectable, OnDestroy } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  CollectionReference,
  docData,
  where,
} from '@angular/fire/firestore';
import { WhereFilterOp } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class AngularService {
  criminalsCollection: CollectionReference;
  constructor(firestore: Firestore) {
    this.criminalsCollection = collection(firestore, 'criminals');
  }
  getCriminal(key: string, op: WhereFilterOp, value: string) {
    return collectionData(this.criminalsCollection);
  }
}
