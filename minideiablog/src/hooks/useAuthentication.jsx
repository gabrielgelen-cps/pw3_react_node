import { db } from '../firebase'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmail,
    uploadProfile,
    signOut
} from 'firebase/auth'
import { useState, useEffect } from 'react'