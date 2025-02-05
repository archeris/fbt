/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @emails oncall+internationalization
 * @flow strict-local
 * @format
 */

export type FbtHookRegistrations = $Shape<{
  errorListener: (context: FbtErrorContext) => IFbtErrorListener,
}>;

const _registrations: FbtHookRegistrations = {};

const FbtHooks = {
  register(registrations: FbtHookRegistrations): void {
    Object.assign(_registrations, registrations);
  },

  getErrorListener(context: FbtErrorContext): ?IFbtErrorListener {
    const factory = _registrations.errorListener;
    return factory ? factory(context) : null;
  },
};
module.exports = FbtHooks;
