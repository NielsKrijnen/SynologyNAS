import type { Property, Registry } from "./types"

const CertificateCRTIssuer: Property = {
  type: "object",
  items: {
    city: { type: "string" },
    common_name: { type: "string" },
    country: { type: "string" },
    organization: { type: "string" }
  }
}

const PersonalSettingsQuotaItem = (children: boolean): Property => ({
  type: "object",
  items: {
    ...(children && {
      children: {
        type: "array",
        items: PersonalSettingsQuotaItem(false)
      }
    }),
    expanded: { type: "boolean" },
    leaf: { type: "boolean" },
    name: { type: "string" },
    quota: { type: "options", items: [{ type: "string" }, { type: "integer" }] },
    share_quota: { type: "options", items: [{ type: "string" }, { type: "integer" }] },
    share_used: { type: "options", items: [{ type: "string" }, { type: "integer" }] },
    used: { type: "options", items: [{ type: "string" }, { type: "integer" }] }
  }
})

const SNMPSetParamsV1V2: Property = { type: "object", items: { rocommunity: { type: "string" } } }

const SNMPSetParamsV3: Property = {
  type: "object",
  items: {
    rouser: { type: "string" },
    auth_type: { type: "enum", items: ["MD5", "SHA"] },
    password: { type: "string" }
  }
}

const SNMPSetParamsPrivacy: Property = {
  type: "object",
  items: {
    privacy_type: { type: "enum", items: ["DES", "AES"] },
    privacy_key: { type: "string" }
  }
}

const SNMPSetParamsDefault: Property = {
  type: "object",
  items: {
    name: { type: "string", optional: true },
    location: { type: "string", optional: true },
    contact: { type: "string", optional: true }
  }
}

const SecurityScanStatusSystemGetItem: Property = {
  type: "object",
  items: {
    category: { type: "string" },
    fail: {
      type: "object",
      items: {
        danger: { type: "integer" },
        info: { type: "integer" },
        outOfDate: { type: "integer" },
        risk: { type: "integer" },
        warning: { type: "integer" }
      }
    },
    failSeverity: { type: "string" },
    progress: { type: "integer" },
    runningItem: { type: "string" },
    total: { type: "integer" },
    waitNum: { type: "integer" }
  }
}

export const registry: Registry = {
  apis: {
    SYNO: {
      apis: {
        API: {
          apis: {
            Auth: {
              apis: {
                Type: {
                  methods: {
                    get: {
                      1: {
                        params: {
                          type: "object",
                          optional: true,
                          items: {
                            account: { type: "string", optional: true }
                          }
                        },
                        response: {
                          type: "array",
                          items: {
                            type: "object",
                            items: {
                              type: { type: "string" }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                UIConfig: {
                  methods: {
                    get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            cssPath: {
                              type: "string",
                              optional: true
                            },
                            jsPath: { type: "string" },
                            texts: {
                              type: "object",
                              additionalProperties: {
                                type: "object",
                                items: {
                                  app: {
                                    type: "object",
                                    items: {
                                      description: { type: "string" },
                                      displayname: { type: "string" },
                                      warning_remove_2fa_device: { type: "string" },
                                      warning_remove_2step_device: { type: "string" },
                                      warning_remove_the_last_2fa_device: { type: "string" },
                                      warning_remove_the_last_2step_device: { type: "string" }
                                    }
                                  },
                                  authenticator: {
                                    type: "object",
                                    items: {
                                      "2fa_authenticator_desc": { type: "string" },
                                      "2fa_desc": { type: "string" },
                                      "2fa_login_flow": { type: "string" },
                                      "2fa_note_scan_qr_code": { type: "string" },
                                      "2fa_setup_finish_desc": { type: "string" },
                                      "2fa_with_authenticator": { type: "string" },
                                      app_version: { type: "string" },
                                      approve_sign_in: { type: "string" },
                                      authenticator_desc: { type: "string" },
                                      enforce_2fa_authenticator_desc: { type: "string" },
                                      install_authenticator: { type: "string" },
                                      install_authenticator_desc: { type: "string" },
                                      login_desc: { type: "string" },
                                      login_flow: { type: "string" },
                                      login_page_desc: { type: "string" },
                                      login_request_resend: { type: "string" },
                                      login_request_resend_button: { type: "string" },
                                      management_empty_text: { type: "string" },
                                      mobile_wait_too_long_info: { type: "string" },
                                      model: { type: "string" },
                                      note_scan_qr_code: { type: "string" },
                                      os_version: { type: "string" },
                                      private_ip_error_msg_admin: { type: "string" },
                                      private_ip_error_msg_admin_with_params: { type: "string" },
                                      private_ip_error_msg_user: { type: "string" },
                                      receive_sign_in_request: { type: "string" },
                                      recv_sign_in_requests: { type: "string" },
                                      register_unavailable_title: { type: "string" },
                                      request_denied: { type: "string" },
                                      request_denied_desc: { type: "string" },
                                      request_sent_desc: { type: "string" },
                                      request_sent_num_desc: { type: "string" },
                                      request_timeout: { type: "string" },
                                      request_timeout_desc: { type: "string" },
                                      scan_qr_code: { type: "string" },
                                      setup_authenticator: { type: "string" },
                                      setup_authenticator_desc: { type: "string" },
                                      sign_in_method: { type: "string" },
                                      sign_in_with_authenticator: { type: "string" },
                                      tap_to_continue: { type: "string" },
                                      try_again: { type: "string" }
                                    }
                                  },
                                  common: {
                                    type: "object",
                                    items: {
                                      "2fa_off": { type: "string" },
                                      "2fa_on": { type: "string" },
                                      "2fa_package_broken_msg": { type: "string" },
                                      add_time: { type: "string" },
                                      continue: { type: "string" },
                                      last_used_time: { type: "string" },
                                      package_broken_msg: { type: "string" },
                                      passwordless_off: { type: "string" },
                                      passwordless_on: { type: "string" },
                                      passwordless_signin: { type: "string" },
                                      setup_success: { type: "string" },
                                      turn_off: { type: "string" }
                                    }
                                  },
                                  error: {
                                    type: "object",
                                    items: {
                                      invalid_device_name: { type: "string" },
                                      invalid_domain: { type: "string" },
                                      invalid_domain_user: { type: "string" },
                                      other_ways_desc: { type: "string" },
                                      register_again: { type: "string" },
                                      something_wrong: { type: "string" }
                                    }
                                  },
                                  fido: {
                                    type: "object",
                                    items: {
                                      complete_login: { type: "string" },
                                      follow_steps: { type: "string" },
                                      hardware_security_key: { type: "string" },
                                      keyname_collision: { type: "string" },
                                      login_page_desc: { type: "string" },
                                      mac_touch_id_setup_desc: { type: "string" },
                                      management_empty_text: { type: "string" },
                                      method_touch_id: { type: "string" },
                                      method_usb_key: { type: "string" },
                                      method_windows_hello: { type: "string" },
                                      name_your_key: { type: "string" },
                                      platform_key_not_setup_desc: { type: "string" },
                                      reg_wizard_usb_key_title: { type: "string" },
                                      register_duplicate_key: { type: "string" },
                                      security_key_registered: { type: "string" },
                                      security_key_registered_desc: { type: "string" },
                                      securiy_key_registered: { type: "string" },
                                      select_type: { type: "string" },
                                      set_up_ddns: { type: "string" },
                                      set_up_ddns_desc: { type: "string" },
                                      touch_id_2fa_desc: { type: "string" },
                                      touch_id_desc: { type: "string" },
                                      touch_id_disabled: { type: "string" },
                                      touch_id_login_desc: { type: "string" },
                                      touch_id_login_desc_with_otp: { type: "string" },
                                      touch_id_not_set_up_desc: { type: "string" },
                                      touch_id_not_set_up_title: { type: "string" },
                                      touch_id_reg: { type: "string" },
                                      touch_id_setup_desc: { type: "string" },
                                      type_touch_id: { type: "string" },
                                      type_usb_key: { type: "string" },
                                      type_windows_hello: { type: "string" },
                                      usb_key_2fa_desc: { type: "string" },
                                      usb_key_desc: { type: "string" },
                                      usb_key_login_desc: { type: "string" },
                                      usb_key_login_desc_with_otp: { type: "string" },
                                      usb_key_name: { type: "string" },
                                      usb_key_name_desc: { type: "string" },
                                      usb_key_reg: { type: "string" },
                                      usb_key_reg_desc: { type: "string" },
                                      use_registered_hostname_desc: { type: "string" },
                                      use_registered_hostname_desc_with_params: { type: "string" },
                                      use_valid_domain_title: { type: "string" },
                                      verifying: { type: "string" },
                                      windows_hello_2fa_desc: { type: "string" },
                                      windows_hello_desc: { type: "string" },
                                      windows_hello_disabled: { type: "string" },
                                      windows_hello_login_desc: { type: "string" },
                                      windows_hello_login_desc_with_otp: { type: "string" },
                                      windows_hello_not_set_up_desc: { type: "string" },
                                      windows_hello_not_set_up_title: { type: "string" },
                                      windows_hello_reg: { type: "string" },
                                      windows_hello_setup_desc: { type: "string" }
                                    }
                                  },
                                  inherit: {
                                    type: "object",
                                    items: {
                                      "2fa_desc": { type: "string" },
                                      "2fa_no": { type: "string" },
                                      "2fa_note": { type: "string" },
                                      "2fa_title": { type: "string" },
                                      "2fa_yes": { type: "string" },
                                      inherit_to_2fa_desc: { type: "string" },
                                      inherit_to_2fa_title: { type: "string" },
                                      inherit_to_passwordless_desc: { type: "string" },
                                      inherit_to_passwordless_title: { type: "string" },
                                      passwordless_desc: { type: "string" },
                                      passwordless_no: { type: "string" },
                                      passwordless_note: { type: "string" },
                                      passwordless_title: { type: "string" },
                                      passwordless_yes: { type: "string" }
                                    }
                                  },
                                  management: {
                                    type: "object",
                                    items: {
                                      "2fa_desc": { type: "string" },
                                      "2fa_settings_activated_time": { type: "string" },
                                      "2fa_settings_general_desc": { type: "string" },
                                      alert_disable_2fa: { type: "string" },
                                      alert_disable_2fa_title: { type: "string" },
                                      alert_disable_passwordless: { type: "string" },
                                      alert_disable_passwordless_title: { type: "string" },
                                      chagne_mobile_device_title: { type: "string" },
                                      change_mobile_device_desc: { type: "string" },
                                      change_mobile_device_title: { type: "string" },
                                      device_name: { type: "string" },
                                      edit_device_name: { type: "string" },
                                      enforce_2fa_by_admin: { type: "string" },
                                      enforce_2fa_remove_last_signin: { type: "string" },
                                      passwordless_desc: { type: "string" },
                                      passwordless_settings_activated_time: { type: "string" },
                                      passwordless_settings_general_desc: { type: "string" },
                                      remove_a_2fa_signin: { type: "string" },
                                      remove_a_passwordless_signin: { type: "string" },
                                      remove_last_2fa_signin: { type: "string" },
                                      remove_last_2fa_signin_and_otp_disabled: { type: "string" },
                                      remove_last_passwordless_signin: { type: "string" },
                                      reset_current_mobile_device: { type: "string" },
                                      trusted_device_desc: { type: "string" },
                                      unavailable_sa_desc_admin: { type: "string" },
                                      unavailable_sa_desc_user: { type: "string" }
                                    }
                                  },
                                  otp: {
                                    type: "object",
                                    items: {
                                      "2fa_summary_desc": { type: "string" },
                                      "2fa_summary_note": { type: "string" },
                                      backup_email_admin_tip: { type: "string" },
                                      backup_email_desc: { type: "string" },
                                      backup_email_note_desc: { type: "string" },
                                      backup_email_user_tip: { type: "string" },
                                      download_qrcode_note: { type: "string" },
                                      email_service_provider: { type: "string" },
                                      management_empty_text: { type: "string" },
                                      no_service_provider_or_backup_email: { type: "string" },
                                      note_desc: { type: "string" },
                                      otp_backup_mail_settings_desc: { type: "string" },
                                      otp_wizard_backup_method_welcome_desc: { type: "string" },
                                      otp_wizard_backup_method_welcome_note: { type: "string" },
                                      otp_wizard_welcome_desc: { type: "string" },
                                      otp_wizard_welcome_note: { type: "string" },
                                      reomte_admin_email_update_info: { type: "string" },
                                      reomte_user_email_update_info: { type: "string" },
                                      skip_backup_email_warning_msg: { type: "string" },
                                      skip_warning_msg: { type: "string" },
                                      wizard_mail_step_no_sender_desc: { type: "string" }
                                    }
                                  },
                                  personal_setting: {
                                    type: "object",
                                    items: {
                                      "2fa_desc": { type: "string" },
                                      first_signin_step: { type: "string" },
                                      first_signin_step_desc: { type: "string" },
                                      no_sa_signin_method_desc: { type: "string" },
                                      passwordless_signin_desc: { type: "string" },
                                      second_signin_step: { type: "string" },
                                      signin_method_desc: { type: "string" }
                                    }
                                  },
                                  wizard: {
                                    type: "object",
                                    items: {
                                      "2fa_desc": { type: "string" },
                                      "2fa_has_been_turned_on": { type: "string" },
                                      "2fa_title": { type: "string" },
                                      add_alternative_signin_method: { type: "string" },
                                      add_new_signin_methods: { type: "string" },
                                      confirm_rollback: { type: "string" },
                                      confirm_rollback_title: { type: "string" },
                                      enforce_2fa_headline: { type: "string" },
                                      enforce_2fa_welcome_desc1: { type: "string" },
                                      enforce_2fa_welcome_desc2: { type: "string" },
                                      hardware_security_key_desc: { type: "string" },
                                      leave_desc: { type: "string" },
                                      passwordless_desc: { type: "string" },
                                      passwordless_title: { type: "string" },
                                      set_backup_2fa_content: { type: "string" },
                                      set_backup_2fa_desc: { type: "string" }
                                    }
                                  }
                                }
                              }
                            },
                            version: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                }
              },
              methods: {
                login: {
                  7: {
                    setSession: {
                      sid: { key: "sid" },
                      synotoken: { key: "synotoken" }
                    },
                    defaultParams: {
                      format: "cookie",
                      enable_syno_token: "yes"
                    },
                    params: {
                      type: "object",
                      items: {
                        account: { type: "string" },
                        passwd: { type: "string" },
                        otp_code: {
                          type: "string",
                          optional: true
                        }
                      }
                    },
                    response: {
                      type: "object",
                      items: {
                        account: { type: "string" },
                        device_id: { type: "string" },
                        sid: { type: "string" },
                        is_portal_port: { type: "boolean" },
                        synotoken: { type: "string" }
                      }
                    }
                  }
                },
                logout: {
                  1: {
                    respond: false,
                    setSession: {
                      sid: { value: null },
                      synotoken: { value: null }
                    }
                  }
                }
              }
            },
            Encryption: {
              methods: {
                getinfo: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        cipherkey: { type: "string" },
                        ciphertoken: { type: "string" },
                        public_key: { type: "string" },
                        server_time: { type: "float" }
                      }
                    }
                  }
                }
              }
            },
            Info: {
              methods: {
                query: {
                  1: {
                    params: {
                      type: "object",
                      optional: true,
                      items: {
                        query: {
                          type: "string",
                          optional: true,
                          description: 'API names, separated by a comma "," or use "all" to get all supported APIs'
                        }
                      }
                    },
                    response: {
                      type: "object",
                      additionalProperties: {
                        type: "object",
                        items: {
                          path: { type: "string" },
                          minVersion: { type: "integer" },
                          maxVersion: { type: "integer" },
                          requestFormat: { type: "string" }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        ActiveInsight: {
          apis: {
            CompleteCollection: {
              methods: {
                get: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        enabled: { type: "boolean" }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        Auth: {
          apis: {
            RescueEmail: {
              methods: {
                get: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        verified: { type: "boolean" }
                      }
                    }
                  }
                },
                set: {
                  1: {
                    respond: false
                  }
                }
              }
            }
          }
        },
        Backup: {
          apis: {
            Config: {
              apis: {
                AutoBackup: {
                  methods: {
                    get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            enable: { type: "boolean" },
                            enc_method: { type: "string" },
                            last_status: { type: "string" },
                            myds_account: { type: "string" },
                            pwd: { type: "string" }
                          }
                        }
                      }
                    },
                    status: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            last_status: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                },
                Backup: {
                  methods: {
                    list: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            services: {
                              type: "array",
                              items: {
                                type: "object",
                                items: {
                                  field: { type: "string" },
                                  id: { type: "string" },
                                  text: { type: "string" }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    start: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            task_id: { type: "string" }
                          }
                        }
                      }
                    },
                    status: {
                      1: {
                        params: {
                          type: "object",
                          items: {
                            task_id: { type: "string" }
                          }
                        },
                        response: {
                          type: "object",
                          items: {
                            finish: { type: "boolean" },
                            task_id: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        CloudSync: {
          methods: {
            list_conn: {
              1: {
                params: {
                  type: "object",
                  optional: true,
                  items: {
                    is_tray: { type: "boolean", optional: true },
                    group_by: { type: "enum", items: ["group_by_user"], optional: true }
                  }
                },
                response: {
                  type: "object",
                  items: {
                    conn: {
                      type: "array",
                      items: { type: "unknown" }
                    },
                    is_admin_mode: { type: "boolean" },
                    is_pause: { type: "boolean" },
                    notification: {
                      type: "options",
                      items: [
                        {
                          type: "object",
                          items: {
                            file_count: { type: "integer" }
                          }
                        },
                        { type: "null" }
                      ]
                    },
                    total: { type: "integer" },
                    tray_status: {
                      type: "enum",
                      items: ["suspended"]
                    }
                  }
                }
              }
            },
            get_available_clouds: {
              1: {
                response: {
                  type: "object",
                  items: {
                    available_clouds: {
                      type: "array",
                      items: { type: "unknown" }
                    }
                  }
                }
              }
            },
            get_config: {
              1: {
                response: {
                  type: "object",
                  items: {
                    admin_mode: { type: "enum", items: ["enable"] },
                    log_count: { type: "integer" },
                    repo_vol_path: { type: "string" },
                    sync_mode: { type: "boolean" },
                    volume_count: { type: "integer" },
                    volume_list: {
                      type: "array",
                      items: {
                        type: "object",
                        items: {
                          desc: { type: "string" },
                          display: { type: "string" },
                          mount_point: { type: "string" },
                          size_free: { type: "string" },
                          size_total: { type: "string" },
                          value: { type: "string" },
                          vol_desc: { type: "string" }
                        }
                      }
                    },
                    worker_count: { type: "integer" }
                  }
                }
              }
            }
          }
        },
        Core: {
          apis: {
            AppNotify: {
              methods: {
                view: {
                  1: {
                    respond: false,
                    params: {
                      type: "object",
                      optional: true,
                      items: {
                        app: { type: "string", optional: true }
                      }
                    }
                  }
                }
              }
            },
            AppPortal: {
              apis: {
                AccessControl: {
                  methods: {
                    list: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            entries: { type: "array", items: { type: "unknown" } }
                          }
                        }
                      }
                    }
                  }
                },
                Config: {
                  methods: {
                    get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            show_titlebar: { type: "boolean" }
                          }
                        }
                      }
                    },
                    set: {
                      1: {
                        respond: false,
                        params: {
                          type: "object",
                          optional: true,
                          items: {
                            show_titlebar: { type: "boolean", optional: true }
                          }
                        }
                      }
                    }
                  }
                },
                ReverseProxy: {
                  methods: {
                    list: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            entries: { type: "array", items: { type: "unknown" } }
                          }
                        }
                      }
                    }
                  }
                }
              },
              methods: {
                list: {
                  2: {
                    params: {
                      type: "object",
                      optional: true,
                      items: {
                        additional: {
                          type: "array",
                          optional: true,
                          items: { type: "enum", items: ["default_setting"] }
                        }
                      }
                    },
                    response: {
                      type: "object",
                      items: {
                        portal: {
                          type: "array",
                          items: {
                            type: "object",
                            items: {
                              additional: {
                                type: "object",
                                optional: true,
                                items: {
                                  default_setting: {
                                    type: "object",
                                    optional: true,
                                    items: {
                                      alias: { type: "string" },
                                      fqdn: { type: "string" },
                                      hsts: { type: "boolean" },
                                      http_port: { type: "integer" },
                                      https_port: { type: "integer" }
                                    }
                                  }
                                }
                              },
                              display_name: { type: "string" },
                              enable_redirect: { type: "boolean" },
                              id: { type: "string" }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            BackgroundTask: {
              methods: {
                get: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        task_conf_time: {
                          type: "object",
                          items: {
                            nsec: { type: "integer" },
                            sec: { type: "integer" }
                          }
                        },
                        task_data_time: {
                          type: "object",
                          items: {
                            nsec: { type: "integer" },
                            sec: { type: "integer" }
                          }
                        },
                        task_groups: {
                          type: "object",
                          additionalProperties: {
                            type: "object",
                            items: {
                              belong_tray: { type: "string" },
                              custom_tray_tooltip: { type: "string" },
                              enable_tray_tooltip: { type: "boolean" },
                              functions: {
                                type: "object",
                                additionalProperties: {
                                  type: "object",
                                  items: {
                                    action_privileges: { type: "array", items: { type: "string" } },
                                    allow_users: { type: "array", items: { type: "unknown" } },
                                    application_privileges: { type: "array", items: { type: "unknown" } },
                                    i18n: { type: "string" },
                                    read_only_config: { type: "boolean" },
                                    system_slice: { type: "string" },
                                    tasks: { type: "object", additionalProperties: { type: "unknown" } },
                                    ui_component: { type: "string" }
                                  }
                                }
                              },
                              i18n: { type: "string" },
                              icon_class: { type: "string" },
                              icon_path: { type: "string" },
                              is_tray: { type: "boolean" },
                              read_only_config: { type: "boolean" },
                              tray_groups: { type: "array", items: { type: "unknown" } },
                              tray_icon_class: { type: "string" }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            Certificate: {
              apis: {
                CRT: {
                  methods: {
                    list: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            certificates: {
                              type: "array",
                              items: {
                                type: "object",
                                items: {
                                  desc: { type: "string" },
                                  id: { type: "string" },
                                  is_broken: { type: "boolean" },
                                  is_default: { type: "boolean" },
                                  issuer: CertificateCRTIssuer,
                                  key_types: { type: "string" },
                                  renewable: { type: "boolean" },
                                  self_signed_cacrt_info: {
                                    type: "object",
                                    items: {
                                      issuer: CertificateCRTIssuer,
                                      subject: CertificateCRTIssuer
                                    }
                                  },
                                  services: {
                                    type: "array",
                                    items: {
                                      type: "object",
                                      items: {
                                        display_name: { type: "string" },
                                        display_name_i18n: { type: "string", optional: true },
                                        isPkg: { type: "boolean" },
                                        multiple_cert: { type: "boolean", optional: true },
                                        owner: { type: "string" },
                                        service: { type: "string" },
                                        subscriber: { type: "string" },
                                        user_setable: { type: "boolean", optional: true }
                                      }
                                    }
                                  },
                                  signature_algorithm: { type: "string" },
                                  subject: {
                                    type: "object",
                                    items: {
                                      ...CertificateCRTIssuer.items,
                                      sub_alt_name: { type: "array", items: { type: "string" } }
                                    }
                                  },
                                  user_deletable: { type: "boolean" },
                                  valid_from: { type: "string" },
                                  valid_to: { type: "string" }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            CMS: {
              apis: {
                Info: {
                  methods: {
                    get: {
                      1: {
                        params: {
                          type: "object",
                          optional: true,
                          items: {
                            additional: {
                              type: "array",
                              optional: true,
                              items: { type: "enum", items: ["gluster_role"] }
                            }
                          }
                        },
                        response: {
                          type: "object",
                          items: {
                            joined: { type: "boolean" },
                            additional: {
                              type: "object",
                              optional: true,
                              items: {
                                gluster_role: {
                                  type: "integer",
                                  optional: true
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            CurrentConnection: {
              methods: {
                get: {
                  1: {
                    params: {
                      type: "object",
                      optional: true,
                      items: {
                        start: { type: "integer", optional: true },
                        limit: { type: "integer", optional: true },
                        sort_by: { type: "enum", items: ["time"], optional: true },
                        sort_direction: { type: "enum", items: ["DESC", "ASC"], optional: true },
                        offset: { type: "integer", optional: true },
                        action: { type: "enum", items: ["enum"], optional: true }
                      }
                    },
                    response: {
                      type: "object",
                      items: {
                        items: {
                          type: "array",
                          items: {
                            type: "object",
                            items: {
                              can_be_kicked: { type: "boolean" },
                              descr: { type: "string" },
                              did: { type: "string" },
                              first_login_time: { type: "string" },
                              from: { type: "string" },
                              is_amfa: { type: "boolean" },
                              is_current_connected: { type: "boolean" },
                              is_otp_trusted: { type: "boolean" },
                              location: { type: "string" },
                              pid: { type: "integer" },
                              protocol: { type: "string" },
                              time: { type: "string" },
                              type: { type: "string" },
                              user_agent: { type: "string" },
                              user_can_be_disabled: { type: "boolean" },
                              who: { type: "string" }
                            }
                          }
                        },
                        systime: { type: "string" },
                        total: { type: "integer" }
                      }
                    }
                  }
                }
              }
            },
            DataCollect: {
              apis: {
                Application: {
                  methods: {
                    record: {
                      1: {
                        respond: false,
                        params: {
                          type: "object",
                          items: {
                            app: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            DDNS: {
              apis: {
                Ethernet: {
                  methods: {
                    list: {
                      1: {
                        response: {
                          type: "array",
                          items: {
                            type: "object",
                            items: {
                              ifname: { type: "string" },
                              ip: { type: "string" },
                              ipv6: { type: "array", items: { type: "unknown" } }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                ExtIP: {
                  methods: {
                    list: {
                      2: {
                        params: {
                          type: "object",
                          optional: true,
                          items: {
                            retry: { type: "boolean", optional: true }
                          }
                        },
                        response: {
                          type: "array",
                          items: {
                            type: "object",
                            items: {
                              ip: { type: "string" },
                              ipv6: { type: "string" },
                              type: { type: "enum", items: ["WAN"] }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                Provider: {
                  methods: {
                    list: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            providers: {
                              type: "array",
                              items: {
                                type: "object",
                                items: {
                                  id: { type: "string" },
                                  provider: { type: "string" },
                                  website: { type: "string" }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                Record: {
                  methods: {
                    list: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            next_update_time: { type: "string" },
                            records: { type: "array", items: { type: "unknown" } }
                          }
                        }
                      }
                    }
                  }
                },
                Synology: {
                  methods: {
                    get_myds_account: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            email: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            Desktop: {
              apis: {
                PersonalUpdater: {
                  methods: {
                    need_update: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            need_update: { type: "boolean" }
                          }
                        }
                      }
                    }
                  }
                },
                Timeout: {
                  methods: {
                    check: {
                      1: {
                        respond: false
                      }
                    }
                  }
                }
              }
            },
            DisableAdmin: {
              methods: {
                get: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        notify_disable_admin: { type: "boolean" }
                      }
                    }
                  }
                }
              }
            },
            DSMNotify: {
              apis: {
                Strings: {
                  methods: {
                    get: {
                      1: {
                        params: {
                          type: "object",
                          items: {
                            lang: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                }
              },
              methods: {
                notify: {
                  1: {
                    respond: false,
                    params: {
                      type: "object",
                      items: {
                        action: { type: "enum", items: ["apply"] },
                        clean: { type: "enum", items: ["all"], optional: true }
                      }
                    }
                  }
                }
              }
            },
            EW: {
              apis: {
                Info: {
                  methods: {
                    get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            have_applied_eunit: { type: "boolean" },
                            info: {
                              type: "object",
                              items: { sn: { type: "string" }, status: { type: "string" } }
                            },
                            mail: { type: "string" },
                            show_welcome_page: { type: "boolean" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            ExternalDevice: {
              apis: {
                Storage: {
                  apis: {
                    eSATA: {
                      methods: {
                        list: {
                          1: {
                            response: {
                              type: "object",
                              items: {
                                devices: { type: "array", items: { type: "unknown" } }
                              }
                            }
                          }
                        }
                      }
                    },
                    USB: {
                      methods: {
                        list: {
                          1: {
                            response: {
                              type: "object",
                              items: {
                                devices: { type: "array", items: { type: "unknown" } }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            FileServ: {
              apis: {
                AFP: {
                  methods: {
                    get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            enable_afp: { type: "boolean" },
                            enable_disconnect_quick: { type: "boolean" },
                            enable_umask: { type: "boolean" },
                            time_machine: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                },
                NFS: {
                  methods: {
                    get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            enable_nfs: { type: "boolean" },
                            enable_nfs_v4: { type: "boolean" },
                            enabled_minor_ver: { type: "integer" },
                            nfs_v4_domain: { type: "string" },
                            read_size: { type: "integer" },
                            support_encrypt_share: { type: "integer" },
                            support_major_ver: { type: "integer" },
                            support_minor_ver: { type: "integer" },
                            unix_pri_enable: { type: "boolean" },
                            write_size: { type: "integer" }
                          }
                        }
                      },
                      2: {
                        response: {
                          type: "object",
                          items: {
                            enable_nfs: { type: "boolean" },
                            enable_nfs_v4: { type: "boolean" },
                            enabled_minor_ver: { type: "integer" },
                            nfs_v4_domain: { type: "string" },
                            read_size: { type: "integer" },
                            support_encrypt_share: { type: "integer" },
                            support_major_ver: { type: "integer" },
                            support_minor_ver: { type: "integer" },
                            unix_pri_enable: { type: "boolean" },
                            write_size: { type: "integer" }
                          }
                        }
                      }
                    }
                  }
                },
                SMB: {
                  methods: {
                    get: {
                      3: {
                        response: {
                          type: "object",
                          items: {
                            disable_shadow_copy: { type: "boolean" },
                            disable_strict_allocate: { type: "boolean" },
                            enable_access_based_share_enum: { type: "boolean" },
                            enable_adserver: { type: "options", items: [{ type: "unknown" }, { type: "null" }] },
                            enable_aio_read: { type: "boolean" },
                            enable_delete_vetofiles: { type: "boolean" },
                            enable_dirsort: { type: "boolean" },
                            enable_durable_handles: { type: "boolean" },
                            enable_enhance_log: { type: "boolean" },
                            enable_fruit_locking: { type: "boolean" },
                            enable_local_master_browser: { type: "boolean" },
                            enable_mask: { type: "boolean" },
                            enable_msdfs: { type: "boolean" },
                            enable_multichannel: { type: "boolean" },
                            enable_ntlmv1_auth: { type: "boolean" },
                            enable_op_lock: { type: "boolean" },
                            enable_perf_chart: { type: "boolean" },
                            enable_reset_on_zero_vc: { type: "boolean" },
                            enable_samba: { type: "boolean" },
                            enable_server_signing: { type: "integer" },
                            enable_smb2_leases: { type: "boolean" },
                            enable_smb3_directory_leasing: { type: "boolean" },
                            enable_strict_sync: { type: "boolean" },
                            enable_symlink: { type: "boolean" },
                            enable_syno_catia: { type: "boolean" },
                            enable_synotify: { type: "boolean" },
                            enable_vetofile: { type: "boolean" },
                            enable_widelink: { type: "boolean" },
                            offline_files_support: { type: "boolean" },
                            smb3_directory_leasing_scope: { type: "enum", items: ["home_only"] },
                            smb_encrypt_transport: { type: "integer" },
                            smb_max_protocol: { type: "integer" },
                            smb_min_protocol: { type: "integer" },
                            syno_wildcard_search: { type: "boolean" },
                            vetofile: { type: "string" },
                            wins: { type: "string" },
                            workgroup: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            Hardware: {
              apis: {
                FanSpeed: {
                  methods: {
                    get: {
                      1: {}
                    }
                  }
                },
                SpectreMeltdown: {
                  methods: {
                    get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            enable_spectre_meltdown_mitigation: { type: "boolean" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            MyDSCenter: {
              methods: {
                query: {
                  2: {
                    response: {
                      type: "object",
                      items: {
                        is_logged_in: { type: "boolean" }
                      }
                    }
                  }
                }
              }
            },
            Network: {
              apis: {
                Bond: {
                  methods: {
                    list: {
                      2: {
                        response: {
                          type: "array",
                          items: { type: "unknown" }
                        }
                      }
                    }
                  }
                },
                Ethernet: {
                  apis: {
                    External: {
                      methods: {
                        check: {
                          1: {
                            response: {
                              type: "array",
                              items: { type: "unknown" }
                            }
                          }
                        }
                      }
                    }
                  },
                  methods: {
                    list: {
                      2: {
                        response: {
                          type: "array",
                          items: {
                            type: "object",
                            items: {
                              block: { type: "integer" },
                              dns: { type: "string" },
                              duplex: { type: "boolean" },
                              enable_ha_ip: { type: "boolean" },
                              enable_vlan: { type: "boolean" },
                              gateway: { type: "string" },
                              ha_local_ip: { type: "string" },
                              ha_local_mask: { type: "string" },
                              ifname: { type: "string" },
                              ip: { type: "string" },
                              ipv6: { type: "array", items: { type: "unknown" } },
                              is_default_gateway: { type: "boolean" },
                              is_main_ha_ip: { type: "boolean" },
                              mask: { type: "string" },
                              max_supported_speed: { type: "integer" },
                              mtu: { type: "integer" },
                              mtu_config: { type: "integer" },
                              nat: { type: "boolean" },
                              speed: { type: "integer" },
                              status: { type: "string" },
                              type: { type: "string" },
                              use_dhcp: { type: "boolean" },
                              vlan_id: { type: "integer" }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                Interface: {
                  methods: {
                    list: {
                      1: {
                        response: {
                          type: "array",
                          items: {
                            type: "object",
                            items: {
                              ifname: { type: "string" },
                              ip: { type: "string" },
                              mask: { type: "string" },
                              speed: { type: "integer" },
                              status: { type: "string" },
                              type: { type: "string" },
                              use_dhcp: { type: "boolean" }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                OVS: {
                  methods: {
                    get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            enable_ovs: { type: "boolean" }
                          }
                        }
                      }
                    }
                  }
                },
                PPPoE: {
                  methods: {
                    list: {
                      1: {
                        response: {
                          type: "array",
                          items: {
                            type: "object",
                            items: {
                              devs: { type: "array", items: { type: "string" } },
                              guest_enabled: { type: "boolean" },
                              ifname: { type: "string" },
                              ip: { type: "string" },
                              is_default_gateway: { type: "integer" },
                              mask: { type: "string" },
                              mtu_config: { type: "string" },
                              password: { type: "string" },
                              real_ifname: { type: "string" },
                              status: { type: "string" },
                              type: { type: "string" },
                              use_dhcp: { type: "boolean" },
                              username: { type: "string" }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                Proxy: {
                  methods: {
                    get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            enable: { type: "boolean" },
                            enable_auth: { type: "boolean" },
                            enable_bypass: { type: "boolean" },
                            enable_different_host: { type: "boolean" },
                            http_host: { type: "string" },
                            http_port: { type: "string" },
                            https_host: { type: "string" },
                            https_port: { type: "string" },
                            password: { type: "string" },
                            username: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                },
                Router: {
                  apis: {
                    Gateway: {
                      apis: {
                        List: {
                          methods: {
                            get: {
                              1: {
                                params: {
                                  type: "object",
                                  items: {
                                    iptype: { type: "enum", items: ["ipv4"] },
                                    type: { type: "enum", items: ["wan"] }
                                  }
                                },
                                response: {
                                  type: "object",
                                  items: {
                                    configs: {
                                      type: "array",
                                      items: {
                                        type: "object",
                                        items: {
                                          class: { type: "string" },
                                          dns: { type: "string" },
                                          gateway: { type: "string" },
                                          ifname: { type: "string" },
                                          priority: { type: "integer" },
                                          slave: { type: "boolean" }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                TrafficControl: {
                  apis: {
                    Rules: {
                      methods: {
                        load: {
                          1: {
                            params: {
                              type: "object",
                              items: { adapter: { type: "string" } }
                            },
                            response: {
                              type: "object",
                              items: {
                                rules: { type: "array", items: { type: "unknown" } },
                                total: { type: "integer" }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                VPN: {
                  apis: {
                    L2TP: {
                      methods: {
                        list: {
                          1: {
                            params: {
                              type: "object",
                              optional: true,
                              items: {
                                additional: {
                                  type: "array",
                                  optional: true,
                                  items: { type: "enum", items: ["status"] }
                                }
                              }
                            },
                            response: {
                              type: "array",
                              items: { type: "unknown" }
                            }
                          }
                        }
                      }
                    },
                    OpenVPN: {
                      methods: {
                        list: {
                          1: {
                            params: {
                              type: "object",
                              optional: false,
                              items: {
                                additional: {
                                  type: "array",
                                  optional: true,
                                  items: { type: "enum", items: ["status"] }
                                }
                              }
                            },
                            response: { type: "array", items: { type: "unknown" } }
                          }
                        }
                      }
                    },
                    OpenVPNWithConf: {
                      methods: {
                        list: {
                          1: {
                            params: {
                              type: "object",
                              optional: true,
                              items: {
                                additional: {
                                  type: "array",
                                  optional: true,
                                  items: { type: "enum", items: ["status"] }
                                }
                              }
                            },
                            response: { type: "array", items: { type: "unknown" } }
                          }
                        }
                      }
                    },
                    PPTP: {
                      methods: {
                        list: {
                          1: {
                            params: {
                              type: "object",
                              optional: true,
                              items: {
                                additional: {
                                  type: "array",
                                  optional: true,
                                  items: { type: "enum", items: ["status"] }
                                }
                              }
                            },
                            response: { type: "array", items: { type: "unknown" } }
                          }
                        }
                      }
                    }
                  }
                }
              },
              methods: {
                get: {
                  2: {
                    response: {
                      type: "object",
                      items: {
                        arp_ignore: { type: "boolean" },
                        dns_manual: { type: "boolean" },
                        dns_primary: { type: "string" },
                        dns_secondary: { type: "string" },
                        enable_spectre_meltdown_mitigation: { type: "boolean" },
                        enable_windomain: { type: "boolean" },
                        gateway: { type: "string" },
                        gateway_info: {
                          type: "object",
                          items: {
                            ifname: { type: "string" },
                            ip: { type: "string" },
                            mask: { type: "string" },
                            status: { type: "string" },
                            type: { type: "string" },
                            use_dhcp: { type: "boolean" }
                          }
                        },
                        ipv4_first: { type: "boolean" },
                        multi_gateway: { type: "boolean" },
                        server_name: { type: "string" },
                        use_dhcp_domain: { type: "boolean" },
                        v6gateway: { type: "string" }
                      }
                    }
                  }
                }
              }
            },
            NormalUser: {
              apis: {
                LoginNotify: {
                  methods: {
                    check: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            need_notify: { type: "boolean" }
                          }
                        }
                      }
                    }
                  }
                }
              },
              methods: {
                get: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        OTP_response: { type: "boolean" },
                        OTP_enforced: { type: "boolean" },
                        disallowchpasswd: { type: "boolean" },
                        editable: { type: "boolean" },
                        email: { type: "string" },
                        fullname: { type: "string" },
                        password_last_change: { type: "integer" },
                        username: { type: "string" }
                      }
                    }
                  }
                },
                set: {
                  2: { respond: false }
                }
              }
            },
            Notification: {
              apis: {
                Advance: {
                  apis: {
                    FilterSettings: {
                      apis: {
                        Profile: {
                          methods: {
                            list: {
                              1: {
                                response: {
                                  type: "object",
                                  items: {
                                    profiles: { type: "array", items: { type: "unknown" } }
                                  }
                                }
                              }
                            }
                          }
                        },
                        Template: {
                          methods: {
                            get: {
                              1: {
                                response: {
                                  type: "object",
                                  items: {
                                    templates: {
                                      type: "array",
                                      items: {
                                        type: "object",
                                        items: {
                                          config: {
                                            type: "object",
                                            items: {
                                              default_enabled_rule_level: { type: "string" },
                                              default_type: { type: "string" },
                                              is_default: { type: "boolean" }
                                            }
                                          },
                                          name: { type: "string" },
                                          template_id: { type: "integer" },
                                          used_by: { type: "array", items: { type: "unknown" } }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                Mail: {
                  apis: {
                    Conf: {
                      methods: {
                        get: {
                          2: {
                            response: {
                              type: "object",
                              items: {
                                enable_mail: { type: "boolean" },
                                enable_oauth: { type: "boolean" },
                                in_use: { type: "array", items: { type: "unknown" } },
                                mail: { type: "array", items: { type: "unknown" } },
                                send_welcome_mail: { type: "boolean" },
                                sender_mail: { type: "string" },
                                sender_name: { type: "string" },
                                smtp_auth: {
                                  type: "object",
                                  items: {
                                    enable: { type: "boolean" },
                                    user: { type: "string" }
                                  }
                                },
                                smtp_info: {
                                  type: "object",
                                  items: {
                                    port: { type: "integer" },
                                    server: { type: "string" },
                                    ssl: { type: "boolean" },
                                    verifyCert: { type: "boolean" }
                                  }
                                },
                                subject_prefix: { type: "string" }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                Push: {
                  apis: {
                    Mail: {
                      methods: {
                        get: {
                          2: {
                            response: {
                              type: "object",
                              items: {
                                enable_mail: { type: "boolean" },
                                mail: { type: "array", items: { type: "unknown" } },
                                subject_prefix: { type: "string" },
                                template_id: { type: "integer" }
                              }
                            }
                          }
                        }
                      }
                    },
                    Webhook: {
                      apis: {
                        Provider: {
                          methods: {
                            list: {
                              2: {
                                response: {
                                  type: "object",
                                  items: {
                                    count: { type: "integer" },
                                    list: { type: "array", items: { type: "unknown" } }
                                  }
                                }
                              }
                            },
                            delete: {
                              2: {
                                respond: false,
                                params: {
                                  type: "object",
                                  items: {
                                    profile_id: { type: "integer" }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            OTP: {
              apis: {
                EnforcePolicy: {
                  methods: {
                    get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            otp_enforce_option: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                }
              },
              methods: {
                get_one: {
                  2: {
                    response: {
                      type: "object",
                      items: {
                        otp_set: { type: "boolean" }
                      }
                    }
                  }
                },
                get_qrcode: {
                  3: {
                    params: {
                      type: "object",
                      items: {
                        enable_margin: { type: "boolean", optional: true },
                        account: { type: "string" }
                      }
                    },
                    response: {
                      type: "object",
                      items: {
                        appAccount: { type: "string" },
                        img: { type: "string" },
                        key: { type: "string" }
                      }
                    }
                  }
                }
              }
            },
            Package: {
              apis: {
                Feed: {
                  methods: {
                    list: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            items: { type: "array", items: { type: "unknown" } },
                            total: { type: "integer" }
                          }
                        }
                      }
                    }
                  }
                },
                Installation: {
                  methods: {
                    get_queue: {
                      1: {
                        params: {
                          type: "object",
                          items: {
                            pkgs: {
                              type: "array",
                              items: {
                                type: "object",
                                items: {
                                  pkg: { type: "string" },
                                  operation: { type: "enum", items: ["install"] },
                                  version: { type: "string" },
                                  beta: { type: "boolean" }
                                }
                              }
                            }
                          }
                        },
                        response: {
                          type: "object",
                          items: {
                            broken_pkgs: { type: "array", items: { type: "unknown" } },
                            cause_pausing_pkgs: { type: "array", items: { type: "unknown" } },
                            conflicted_pkgs: { type: "array", items: { type: "unknown" } },
                            non_exist_pkgs: { type: "array", items: { type: "unknown" } },
                            paused_pkgs: { type: "array", items: { type: "unknown" } },
                            queue: {
                              type: "array",
                              items: {
                                type: "object",
                                items: {
                                  beta: { type: "boolean" },
                                  pkg: { type: "string" },
                                  volume: { type: "string" }
                                }
                              }
                            },
                            replaced_pkgs: { type: "array", items: { type: "unknown" } }
                          }
                        }
                      }
                    }
                  }
                },
                Server: {
                  methods: {
                    check: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            action: { type: "string" },
                            error: { type: "object", items: { code: { type: "integer" } } },
                            stage: { type: "string" },
                            success: { type: "boolean" }
                          }
                        }
                      }
                    }
                  }
                },
                Setting: {
                  methods: {
                    get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            autoupdateall: { type: "boolean" },
                            autoupdateimportant: { type: "boolean" },
                            enable_autoupdate: { type: "boolean" },
                            enable_dsm: { type: "boolean" },
                            enable_email: { type: "boolean" },
                            mailset: { type: "boolean" },
                            show_disable_autoupdate: { type: "boolean" },
                            trust_level: { type: "integer" },
                            update_channel: { type: "boolean" },
                            volume_count: { type: "integer" },
                            volume_list: {
                              type: "array",
                              items: {
                                type: "object",
                                items: {
                                  desc: { type: "string" },
                                  display: { type: "string" },
                                  mount_point: { type: "string" },
                                  size_free: { type: "string" },
                                  size_total: { type: "string" },
                                  vol_desc: { type: "string" },
                                  volume_features: { type: "array", items: { type: "unknown" } }
                                }
                              }
                            },
                            volume_status: { type: "string" }
                          }
                        }
                      }
                    },
                    set: {
                      1: {
                        params: {
                          type: "object",
                          optional: true,
                          items: {
                            update_channel: { type: "enum", items: ["stable", "beta"] },
                            enable_email: { type: "boolean" },
                            enable_dsm: { type: "boolean" },
                            enable_autoupdate: { type: "boolean" },
                            autoupdateall: { type: "boolean" },
                            autoupdateimportant: { type: "boolean" }
                          }
                        },
                        response: {
                          type: "object",
                          items: {
                            enable_dsm: { type: "boolean" },
                            enable_email: { type: "boolean" },
                            update_channel: { type: "enum", items: ["stable", "beta"] }
                          }
                        }
                      }
                    }
                  }
                }
              },
              methods: {
                list: {
                  2: {
                    params: {
                      type: "object",
                      optional: true,
                      items: {
                        additional: {
                          type: "array",
                          optional: true,
                          items: { type: "enum", items: ["status_sketch", "dsm_apps", "install_type"] }
                        },
                        ignore_hidden: { type: "boolean", optional: true }
                      }
                    },
                    response: {
                      type: "object",
                      items: {
                        packages: {
                          type: "array",
                          items: {
                            type: "object",
                            items: {
                              additional: {
                                type: "object",
                                optional: true,
                                items: {
                                  status_sketch: { type: "string", optional: true },
                                  dsm_apps: { type: "string", optional: true },
                                  install_type: { type: "string", optional: true }
                                }
                              },
                              id: { type: "string" },
                              name: { type: "string" },
                              timestamp: { type: "integer" },
                              version: { type: "string" }
                            }
                          }
                        },
                        total: { type: "integer" }
                      }
                    }
                  }
                },
                feasibility_check: {
                  1: {
                    respond: false,
                    params: {
                      type: "object",
                      items: {
                        type: { type: "enum", items: ["install_check"] },
                        packages: { type: "array", items: { type: "string" } }
                      }
                    }
                  }
                }
              }
            },
            PersonalSettings: {
              methods: {
                quota: {
                  1: {
                    params: {
                      type: "object",
                      optional: true,
                      items: {
                        start: { type: "integer", optional: true },
                        offset: { type: "integer", optional: true },
                        limit: { type: "integer", optional: true }
                      }
                    },
                    response: {
                      type: "object",
                      items: {
                        items: { type: "array", items: PersonalSettingsQuotaItem(true) },
                        total: { type: "integer" }
                      }
                    }
                  }
                }
              }
            },
            Polling: {
              apis: {
                Data: {
                  methods: {
                    get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            diskList: { type: "array", items: { type: "unknown" } }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            Promotion: {
              apis: {
                Info: {
                  methods: {
                    is_2FA_enabled: {
                      1: {
                        response: {
                          type: "integer"
                        }
                      }
                    }
                  }
                },
                PreInstall: {
                  methods: {
                    get_never_show: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            never_show: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            QuickConnect: {
              apis: {
                Permission: {
                  methods: {
                    get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            services: {
                              type: "array",
                              items: {
                                type: "object",
                                items: { enabled: { type: "boolean" }, id: { type: "string" } }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              methods: {
                check_availability: {
                  3: {
                    response: {
                      type: "object",
                      items: {
                        available: { type: "boolean" },
                        code: { type: "integer" },
                        country: { type: "string" }
                      }
                    }
                  }
                },
                get: {
                  2: {
                    response: {
                      type: "object",
                      items: {
                        ddns_domain: { type: "string" },
                        domain: { type: "string" },
                        enabled: { type: "boolean" },
                        myds_account: { type: "string" },
                        region: { type: "string" },
                        server_alias: { type: "string" },
                        server_id: { type: "string" }
                      }
                    }
                  }
                },
                status: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        alias_status: { type: "string" },
                        status: { type: "string" }
                      }
                    }
                  }
                }
              }
            },
            QuickStart: {
              apis: {
                Info: {
                  methods: {
                    load_ds_info: {
                      3: {
                        response: {
                          type: "object",
                          items: {
                            admin_configured: { type: "boolean" },
                            ew20_website_url: { type: "string" },
                            first_admin_login: { type: "boolean" },
                            privacy_agreement: { type: "string" },
                            promote_ew: { type: "boolean" },
                            udc_check_state: { type: "string" },
                            udc_enabled: { type: "string" },
                            welcome_hide: { type: "boolean" },
                            welcome_upgrade_step: { type: "boolean" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            Security: {
              apis: {
                AutoBlock: {
                  methods: {
                    get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            attempts: { type: "integer" },
                            enable: { type: "boolean" },
                            expire_day: { type: "integer" },
                            within_mins: { type: "integer" }
                          }
                        }
                      }
                    }
                  }
                },
                DoS: {
                  methods: {
                    get: {
                      2: {
                        params: {
                          type: "object",
                          optional: true,
                          items: {
                            configs: {
                              type: "array",
                              optional: true,
                              items: {
                                type: "object",
                                items: {
                                  adapter: { type: "string" }
                                }
                              }
                            }
                          }
                        },
                        response: {
                          type: "array",
                          items: {
                            type: "object",
                            items: {
                              adapter: { type: "string" },
                              dos_protect_enable: { type: "boolean" }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                DSM: {
                  apis: {
                    Embed: {
                      methods: {
                        get: {
                          1: {
                            response: {
                              type: "object",
                              items: {
                                enable_block: { type: "boolean" },
                                whitelist: { type: "array", items: { type: "string" } }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  methods: {
                    get: {
                      6: {
                        response: {
                          type: "object",
                          items: {
                            allow_2fa_device_lost_option: { type: "boolean" },
                            allow_stay_signed_in_option: { type: "boolean" },
                            allow_trust_device_2fa_option: { type: "boolean" },
                            csp_header_option: { type: "boolean" },
                            enable_csrf_protection: { type: "boolean" },
                            restart_clean_session: { type: "boolean" },
                            skip_ip_checking: { type: "boolean" },
                            timeout: { type: "integer" }
                          }
                        }
                      }
                    }
                  }
                },
                Firewall: {
                  apis: {
                    Conf: {
                      methods: {
                        get: {
                          1: {
                            response: {
                              type: "object",
                              items: {
                                enable_port_check: { type: "boolean" }
                              }
                            }
                          }
                        }
                      }
                    },
                    Profile: {
                      methods: {
                        list: {
                          1: {
                            response: {
                              type: "object",
                              items: {
                                profile_names: { type: "array", items: { type: "string" } }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  methods: {
                    get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            enable_firewall: { type: "boolean" },
                            profile_name: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            SecurityScan: {
              apis: {
                Conf: {
                  methods: {
                    time_get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            curTime: { type: "integer" },
                            success: { type: "boolean" }
                          }
                        }
                      }
                    },
                    first_get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            firstLogAnalyzer: { type: "boolean" },
                            firstScan: { type: "boolean" },
                            iscrack: { type: "boolean" },
                            success: { type: "boolean" }
                          }
                        }
                      }
                    }
                  }
                },
                Operation: {
                  methods: {
                    update: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            lang: {
                              type: "object",
                              items: {
                                rule: {
                                  type: "object",
                                  additionalProperties: { type: "string" }
                                },
                                rules: {
                                  type: "object",
                                  additionalProperties: { type: "string" }
                                }
                              }
                            },
                            success: { type: "boolean" }
                          }
                        }
                      }
                    },
                    start: {
                      1: {
                        params: {
                          type: "object",
                          items: {
                            items: { type: "enum", items: ["ALL"] }
                          }
                        },
                        response: {
                          type: "object",
                          items: {
                            success: { type: "boolean" }
                          }
                        }
                      }
                    }
                  }
                },
                Status: {
                  methods: {
                    rule_get: {
                      1: {
                        params: {
                          type: "object",
                          items: {
                            items: { type: "enum", items: ["ALL"] }
                          }
                        },
                        response: {
                          type: "object",
                          items: {
                            isUpdating: { type: "boolean" },
                            items: {
                              type: "object",
                              additionalProperties: {
                                type: "object",
                                items: {
                                  action: { type: "string" },
                                  category: { type: "string" },
                                  id: { type: "string" },
                                  method: { type: "string" },
                                  severity: { type: "string" },
                                  status: { type: "string" },
                                  strId: { type: "string" },
                                  update: { type: "string" }
                                }
                              }
                            },
                            success: { type: "boolean" }
                          }
                        }
                      }
                    },
                    system_get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            items: {
                              type: "object",
                              items: {
                                malware: SecurityScanStatusSystemGetItem,
                                network: SecurityScanStatusSystemGetItem,
                                systemCheck: SecurityScanStatusSystemGetItem,
                                update: SecurityScanStatusSystemGetItem,
                                userInfo: SecurityScanStatusSystemGetItem
                              }
                            },
                            lastScanTime: { type: "string" },
                            startTime: { type: "string" },
                            success: { type: "boolean" },
                            sysProgress: { type: "integer" },
                            sysStatus: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            SNMP: {
              methods: {
                get: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        contact: { type: "string" },
                        enable_snmp: { type: "boolean" },
                        enable_snmp_v1v2: { type: "boolean" },
                        enable_snmp_v3: { type: "boolean" },
                        location: { type: "string" },
                        name: { type: "string" },
                        node0_name: { type: "string" },
                        node1_name: { type: "string" },
                        rocommunity: { type: "string" },
                        rouser: { type: "string" }
                      }
                    }
                  }
                },
                set: {
                  1: {
                    respond: false,
                    params: {
                      type: "options",
                      items: [
                        {
                          type: "object",
                          items: { enable_snmp: { type: "boolean", exact: false } }
                        },
                        {
                          type: "object",
                          items: {
                            enable_snmp: { type: "boolean", exact: true },
                            enable_snmp_v1v2: { type: "boolean", exact: true },
                            enable_snmp_v3: { type: "boolean", exact: false },
                            ...SNMPSetParamsV1V2.items,
                            ...SNMPSetParamsDefault.items
                          }
                        },
                        {
                          type: "object",
                          items: {
                            enable_snmp: { type: "boolean", exact: true },
                            enable_snmp_v1v2: { type: "boolean", exact: false },
                            enable_snmp_v3: { type: "boolean", exact: true },
                            enable_privacy: { type: "boolean", exact: false, optional: true },
                            ...SNMPSetParamsV3.items,
                            ...SNMPSetParamsDefault.items
                          }
                        },
                        {
                          type: "object",
                          items: {
                            enable_snmp: { type: "boolean", exact: true },
                            enable_snmp_v1v2: { type: "boolean", exact: false },
                            enable_snmp_v3: { type: "boolean", exact: true },
                            enable_snmp_privacy: { type: "boolean", exact: true },
                            ...SNMPSetParamsV3.items,
                            ...SNMPSetParamsPrivacy.items,
                            ...SNMPSetParamsDefault.items
                          }
                        },
                        {
                          type: "object",
                          items: {
                            enable_snmp: { type: "boolean", exact: true },
                            enable_snmp_v1v2: { type: "boolean", exact: true },
                            enable_snmp_v3: { type: "boolean", exact: true },
                            enable_privacy: { type: "boolean", exact: false, optional: true },
                            ...SNMPSetParamsV1V2.items,
                            ...SNMPSetParamsV3.items,
                            ...SNMPSetParamsDefault.items
                          }
                        },
                        {
                          type: "object",
                          items: {
                            enable_snmp: { type: "boolean", exact: true },
                            enable_snmp_v1v2: { type: "boolean", exact: true },
                            enable_snmp_v3: { type: "boolean", exact: true },
                            enable_privacy: { type: "boolean", exact: true },
                            ...SNMPSetParamsV1V2.items,
                            ...SNMPSetParamsV3.items,
                            ...SNMPSetParamsPrivacy.items,
                            ...SNMPSetParamsDefault.items
                          }
                        }
                      ]
                    }
                  }
                }
              }
            }
          }
        },
        Entry: {
          apis: {
            Request: {
              methods: {
                request: {
                  1: {
                    params: {
                      type: "object",
                      items: {
                        stop_when_error: { type: "boolean" },
                        mode: { type: "enum", items: ["sequential"] },
                        compound: {
                          type: "array",
                          items: {
                            type: "object",
                            items: {
                              api: { type: "string" },
                              method: { type: "string" },
                              version: { type: "integer" }
                            },
                            additionalProperties: {
                              type: "options",
                              items: [{ type: "string" }, { type: "integer" }, { type: "boolean" }]
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        FileStation: {
          apis: {
            Favorite: {
              methods: {
                list: {
                  2: {
                    params: {
                      type: "object",
                      optional: true,
                      items: {
                        filetype: { type: "enum", items: ["dir"], optional: true },
                        sort_by: { type: "enum", items: ["name"], optional: true },
                        check_dir: { type: "boolean", optional: true },
                        additional: {
                          type: "array",
                          items: {
                            type: "enum",
                            items: [
                              "real_path",
                              "owner",
                              "time",
                              "perm",
                              "mount_point_type",
                              "sync_share",
                              "volume_status",
                              "indexed",
                              "hybrid_share",
                              "worm_share",
                              "tiering_xattr"
                            ]
                          },
                          optional: true
                        },
                        enum_cluster: { type: "boolean", optional: true },
                        node: { type: "string", optional: true }
                      }
                    },
                    response: {
                      type: "object",
                      items: {
                        favorites: {
                          type: "array",
                          items: {
                            type: "object",
                            items: {
                              path: { type: "string" },
                              name: { type: "string" },
                              status: { type: "enum", items: ["valid", "broken"] }
                            }
                          }
                        },
                        offset: { type: "integer" },
                        total: { type: "integer" }
                      }
                    }
                  }
                }
              }
            },
            Info: {
              methods: {
                get: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        allow_heic_original: { type: "boolean" },
                        allow_normal_disable_html: { type: "boolean" },
                        enable_list_usergrp: { type: "boolean" },
                        enable_send_email_attachment: { type: "boolean" },
                        enable_view_google: { type: "boolean" },
                        enable_view_microsoft: { type: "boolean" },
                        hostname: { type: "string" },
                        is_manager: { type: "boolean" },
                        items: {
                          type: "array",
                          items: {
                            type: "object",
                            items: {
                              gid: { type: "integer" }
                            }
                          }
                        },
                        support_file_request: { type: "boolean" },
                        support_sharing: { type: "boolean" },
                        support_vfs: { type: "boolean" },
                        support_virtual: {
                          type: "object",
                          items: {
                            enable_iso_mount: { type: "boolean" },
                            enable_remote_mount: { type: "boolean" }
                          }
                        },
                        support_virtual_protocol: { type: "string" },
                        system_codepage: { type: "string" },
                        uid: { type: "integer" }
                      }
                    }
                  }
                }
              }
            },
            List: {
              methods: {
                list_share: {
                  2: {
                    params: {
                      type: "object",
                      optional: true,
                      items: {
                        filetype: { type: "enum", items: ["dir"], optional: true },
                        sort_by: { type: "enum", items: ["name"], optional: true },
                        check_dir: { type: "boolean", optional: true },
                        additional: {
                          type: "array",
                          items: {
                            type: "enum",
                            items: [
                              "real_path",
                              "owner",
                              "time",
                              "perm",
                              "mount_point_type",
                              "sync_share",
                              "volume_status",
                              "indexed",
                              "hybrid_share",
                              "worm_share",
                              "tiering_xattr"
                            ]
                          }
                        },
                        enum_cluster: { type: "boolean", optional: true },
                        node: { type: "string", optional: true }
                      }
                    },
                    response: {
                      type: "object",
                      items: {
                        offset: { type: "integer" },
                        shares: {
                          type: "array",
                          items: {
                            type: "object",
                            items: {
                              isdir: { type: "boolean" },
                              name: { type: "string" },
                              path: { type: "string" }
                            }
                          }
                        },
                        total: { type: "integer" }
                      }
                    }
                  }
                }
              }
            },
            Mount: {
              apis: {
                List: {
                  methods: {
                    get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            isoList: { type: "array", items: { type: "unknown" } },
                            mountConfig: {
                              type: "object",
                              items: {
                                enable_iso_mount: { type: "boolean" },
                                enable_remote_mount: { type: "boolean" }
                              }
                            },
                            remoteList: { type: "array", items: { type: "unknown" } }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        Finder: {
          apis: {
            Bookmark: {
              methods: {
                get: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        bookmarks: { type: "array", items: { type: "unknown" } },
                        total: { type: "integer" }
                      }
                    }
                  }
                }
              }
            },
            FileIndexing: {
              apis: {
                Folder: {
                  methods: {
                    list: {
                      1: {
                        params: {
                          type: "object",
                          optional: true,
                          items: {
                            direction: { type: "enum", items: ["asc", "desc"], optional: true },
                            sort_by: { type: "enum", items: ["path"], optional: true },
                            offset: { type: "integer", optional: true },
                            additional: { type: "array", items: { type: "unknown" }, optional: true }
                          }
                        },
                        response: {
                          type: "object",
                          items: {
                            folder: { type: "array", items: { type: "unknown" } },
                            offset: { type: "integer" },
                            total: { type: "integer" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            Preference: {
              methods: {
                get: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        enable_history: { type: "boolean" },
                        max_fragment_num: { type: "integer" },
                        max_history_num: { type: "integer" }
                      }
                    }
                  }
                }
              }
            },
            Settings: {
              methods: {
                get: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        db_reading_method: { type: "enum", items: ["fs_directory"] },
                        display_vmtouch_option: { type: "boolean" },
                        enable_cppjieba_dict: { type: "boolean" },
                        enable_mlock: { type: "boolean" },
                        enable_preload_indices: { type: "boolean" },
                        enable_vmtouch: { type: "boolean" },
                        max_alive_db_count: { type: "integer" },
                        max_search_hit_count: { type: "integer" },
                        reader_alive_timeout: { type: "integer" },
                        synotifyd_event_mask: { type: "integer" },
                        vmtouch_reserve_mem: { type: "integer" }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        ResourceMonitor: {
          apis: {
            Setting: {
              methods: {
                get: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        enable_history: { type: "boolean" }
                      }
                    }
                  }
                },
                set: {
                  1: {
                    respond: false,
                    params: {
                      type: "object",
                      items: {
                        enable_history: { type: "boolean" }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        SecureSignIn: {
          apis: {
            AMFA: {
              apis: {
                Policy: {
                  methods: {
                    get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            type: { type: "string" },
                            group_list: { type: "string" },
                            user_list: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            Method: {
              methods: {
                get: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        auth_type: { type: "array", items: { type: "unknown" } },
                        mode: { type: "string" },
                        status: { type: "string" },
                        time: { type: "integer" }
                      }
                    }
                  }
                }
              }
            },
            Package: {
              methods: {
                get: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        account_status: { type: "boolean" },
                        enabled: { type: "boolean" }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        SecurityAdvisor: {
          apis: {
            Conf: {
              apis: {
                Location: {
                  methods: {
                    get: {
                      1: {}
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
