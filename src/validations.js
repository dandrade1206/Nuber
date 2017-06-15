import { isEmail } from 'validator';
import React from 'react';

export const validateName = (name) => (name.length > 2) ? false : <h5 className="alert">Name must be at least 3 characters</h5>;
export const validateEmail = (email) => (isEmail(email)) ? false : 'Email must be a valid format';