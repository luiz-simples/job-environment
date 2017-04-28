FROM job/es6:base

### CHANGE HERE YOUR USER ID TO DEVELOPMENT
ENV PERM_USER_ID 1000

### CREATE USER FOR DEVELOPMENT
RUN echo "%sudo ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers && \
    useradd -u ${PERM_USER_ID} -G users,www-data,sudo -d /job --shell /bin/bash -m job && \
    echo "secret\nsecret" | passwd job

### IMPORT FILES TO ENVIRONMENT
COPY ./.bashrc /job/.bashrc
COPY ./entrypoint.sh /etc/entrypoint.sh
RUN chmod +x /etc/entrypoint.sh
RUN chown job:job /job/.bashrc

USER job
WORKDIR /job

CMD ["/bin/bash"]
ENTRYPOINT ["/etc/entrypoint.sh"]
