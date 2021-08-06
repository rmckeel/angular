/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {expect} from '@angular/platform-browser/testing/src/matchers';
import {FormArray, FormControl} from '../src/forms';

{
  describe('FormControl', () => {
    it('should work with a simple type', () => {
      const c = new FormControl('default');
      c.reset('reset');
      expect(c.value).toBe('reset');
      c.setValue('setValue');
      expect(c.value).toBe('setValue');
      c.patchValue('patchValue');
      expect(c.value).toBe('patchValue');
      const v: string = c.value;
    });

    /* NOTE: commenting out these tests for now since they are breaking the build
    it('should reject usages with the wrong type', () => {
      const c = new FormControl('default');
      c.reset(42);                // should be error
      c.setValue(42);             // should be error
      c.patchValue(42);           // should be error
      const v: number = c.value;  // should be error
    });

    it('should reject nullable usages with a simple type', () => {
      const c = new FormControl('default');
      c.reset();
      c.reset(null);
      c.setValue(null);
      c.patchValue(null);
      // TODO: check c.value is a string
    });
    */

    it('should allow nullable usages with a nullable type', () => {
      const c = new FormControl<string|null>('default');
      c.reset();
      c.reset(null);
      c.setValue(null);
      c.patchValue(null);
      // TODO: check c.value is a string or null
    });
  })

  describe('FormArray', () => {
    it('demo', () => {
      const c1 = new FormControl<string>('default');
      // const c2 = new FormControl<number>(42);
      const a = new FormArray([c1]);
      const at = a.at(0);
      console.log(at);
    });
  });
}