frontend-app-mf-shell
##########################

|license-badge| |status-badge| |ci-badge| |codecov-badge|

.. |license-badge| image:: https://img.shields.io/github/license/openedx/frontend-app-mf-shell.svg
    :target: https://github.com/openedx/frontend-app-mf-shell/blob/main/LICENSE
    :alt: License

.. |status-badge| image:: https://img.shields.io/badge/Status-Maintained-brightgreen

.. |ci-badge| image:: https://github.com/openedx/frontend-app-mf-shell/actions/workflows/ci.yml/badge.svg
    :target: https://github.com/openedx/frontend-app-mf-shell/actions/workflows/ci.yml
    :alt: Continuous Integration

.. |codecov-badge| image:: https://codecov.io/github/openedx/frontend-app-mf-shell/coverage.svg?branch=main
    :target: https://codecov.io/github/openedx/frontend-app-mf-shell?branch=main
    :alt: Codecov

Purpose
=======

This MFE is a shell application demonstrating how we can dynamically compose micro-frontends together using Webpack Module Federation.  It has a single page which loads a hard-coded remote component from a companion MFE, `frontend-app-mf-domain1`_.

.. _frontend-app-mf-domain1: https://github.com/davidjoy/frontend-app-mf-domain1

Running the two apps together demonstrates:

- Loading remote modules from another independently deployed MFE, domain1.
- Sharing libraries from the shell with the domain1 MFE.  ``react``, ``react-dom``, and ``@openedx/paragon`` are shared.
- Dynamic module federation - the shell app does not need to know who the remote app is at build time.
- Hot module replacement for both shell and remote.
- Dynamically loaded CSS modules.

Getting Started
===============

These MFEs do not need a running Open edX instance to function.  You're welcome.

#. Start this MFE with:

   .. code-block::

      cd frontend-app-mf-shell
      nvm use
      npm ci
      npm start

#. Finally, open the MFE in a browser

   Navigate to `http://localhost:8080 <http://localhost:8080>`_ to open the
   MFE.  This is what it should look like if everything worked:

   .. figure:: ./docs/images/template.jpg

      "Polycon marking template" by mangtronix is licensed under CC BY-SA 2.0.

Known Issues
============

Hot module replacement breaks if a developer first changes the shell and then the remote.  HMR loses track of the remote's HMR configuration when this happens, resulting in an error until the page is refreshed.  Basically, if you're developing the shell, don't try to develop domain1 (a remote) in the same page load.

License
=======

The code in this repository is licensed under the AGPLv3 unless otherwise
noted.

Please see `LICENSE <LICENSE>`_ for details.

Contributing
============

Contributions are very welcome.  Please read `How To Contribute`_ for details.

.. _How To Contribute: https://openedx.org/r/how-to-contribute

This project is currently accepting all types of contributions, bug fixes,
security fixes, maintenance work, or new features.  However, please make sure
to have a discussion about your new feature idea with the maintainers prior to
beginning development to maximize the chances of your change being accepted.
You can start a conversation by creating a new issue on this repo summarizing
your idea.

The Open edX Code of Conduct
============================

All community members are expected to follow the `Open edX Code of Conduct`_.

.. _Open edX Code of Conduct: https://openedx.org/code-of-conduct/

People
======

The assigned maintainers for this component and other project details may be
found in `Backstage`_. Backstage pulls this data from the ``catalog-info.yaml``
file in this repo.

.. _Backstage: https://open-edx-backstage.herokuapp.com/catalog/default/component/frontend-app-mf-shell

Reporting Security Issues
=========================

Please do not report security issues in public.  Email security@openedx.org instead.
